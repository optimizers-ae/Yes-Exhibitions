import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Luxury Mouse Tracking Engine for YES Exhibition
 * Features:
 * 1. Zero-latency precision gold center dot
 * 2. Physics lerp trailing halo ring with context-aware morphing
 * 3. Subtle gold stardust particle trail on mouse movement (canvas-based, auto-sleeps on idle)
 * 4. Dynamic ambient gold spotlight following viewport cursor
 * 5. Interactive hover detection (buttons, links, data-cursor="view", inputs)
 * 6. Click ripple micro-interaction
 * 7. Automatic touch-device bypass for mobile responsiveness
 */
const MouseTracker = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'view' | 'drag'
  const [cursorText, setCursorText] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Position references for 60-120fps direct rendering without React state lag
  const mousePosRef = useRef({ x: -100, y: -100 });
  const lerpPosRef = useRef({ x: -100, y: -100 });
  const dotElRef = useRef(null);
  const ringElRef = useRef(null);
  const spotlightElRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameIdRef = useRef(null);
  const lastMoveTimeRef = useRef(0);
  const isMovingRef = useRef(false);

  // Check if touch device on mount
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
    };
    checkTouch();
  }, []);

  // Canvas particle engine (Gold stardust trail)
  const addParticle = useCallback((x, y) => {
    if (particlesRef.current.length > 25) return; // Keep capped for peak performance
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.8 + 0.2;
    const colors = ['#F5D77F', '#E6AA4D', '#DF9B34', '#D49942', '#FFF0B8'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particlesRef.current.push({
      x: x + (Math.random() - 0.5) * 6,
      y: y + (Math.random() - 0.5) * 6,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.2, // slight upward float
      size: Math.random() * 2.2 + 1,
      alpha: 0.8,
      decay: Math.random() * 0.025 + 0.02,
      color,
    });
  }, []);

  // Main animation loop (Lerp ring + Canvas particles + Spotlight)
  useEffect(() => {
    if (isTouchDevice) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      // 1. Lerp smooth trailing position (Linear Interpolation)
      const targetX = mousePosRef.current.x;
      const targetY = mousePosRef.current.y;
      const currentX = lerpPosRef.current.x;
      const currentY = lerpPosRef.current.y;

      const lerpFactor = 0.16; // Fluid trailing easing
      lerpPosRef.current.x += (targetX - currentX) * lerpFactor;
      lerpPosRef.current.y += (targetY - currentY) * lerpFactor;

      const lx = lerpPosRef.current.x;
      const ly = lerpPosRef.current.y;
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // 2. Direct DOM transform updates for 120fps buttery smoothness
      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${lx}px, ${ly}px, 0) translate(-50%, -50%)`;
      }
      if (spotlightElRef.current) {
        spotlightElRef.current.style.background = `radial-gradient(650px circle at ${lx}px ${ly}px, rgba(212, 153, 66, 0.07), rgba(212, 153, 66, 0.015) 35%, transparent 70%)`;
      }

      // 3. Canvas Gold Stardust Particles
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const now = performance.now();
          if (now - lastMoveTimeRef.current < 150 && isMovingRef.current) {
            // Emit particles while actively moving
            if (Math.random() > 0.4) {
              addParticle(mx, my);
            }
          }

          // Update & draw particles
          for (let i = particlesRef.current.length - 1; i >= 0; i--) {
            const p = particlesRef.current[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            p.size = Math.max(0, p.size - 0.02);

            if (p.alpha <= 0 || p.size <= 0) {
              particlesRef.current.splice(i, 1);
              continue;
            }

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.shadowColor = '#D49942';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isTouchDevice, addParticle]);

  // Window resize handler for canvas dimensions
  useEffect(() => {
    if (isTouchDevice) return;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [isTouchDevice]);

  // Mouse event listeners
  useEffect(() => {
    if (isTouchDevice) return;

    let moveTimeout;

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      lastMoveTimeRef.current = performance.now();
      isMovingRef.current = true;

      if (!isVisible) setIsVisible(true);

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMovingRef.current = false;
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isMovingRef.current = false;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = (e) => {
      setIsClicked(true);
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]); // max 5 concurrent ripples
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Event delegation to detect hovered element types
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof HTMLElement)) return;

      // 1. Check for custom 'view' / 'explore' cursor
      const viewEl = target.closest('[data-cursor="view"], [data-cursor="explore"]');
      if (viewEl) {
        setCursorState('view');
        setCursorText(viewEl.getAttribute('data-cursor-text') || 'EXPLORE');
        return;
      }

      // 2. Check for drag/slide cursor
      const dragEl = target.closest('[data-cursor="drag"]');
      if (dragEl) {
        setCursorState('drag');
        setCursorText('DRAG');
        return;
      }

      // 3. Check for clickable / interactive elements (buttons, links, inputs)
      const clickableEl = target.closest(
        'button, a, input, textarea, select, [role="button"], [role="tab"], .cursor-pointer, [data-cursor="pointer"]'
      );
      if (clickableEl) {
        setCursorState('hover');
        setCursorText('');
        return;
      }

      // 4. Default state
      setCursorState('default');
      setCursorText('');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(moveTimeout);
    };
  }, [isTouchDevice, isVisible]);

  // Clean up ripples after animation
  const removeRipple = useCallback((id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  // Do not render anything on touch devices
  if (isTouchDevice) return null;

  // Determine outer ring class and styles based on state
  let ringClasses =
    'fixed top-0 left-0 pointer-events-none rounded-full transition-[width,height,background-color,border-color,opacity,transform] duration-300 ease-out z-[9999] flex items-center justify-center text-center select-none';

  if (!isVisible) {
    ringClasses += ' opacity-0 scale-50';
  } else if (cursorState === 'view') {
    ringClasses +=
      ' w-20 h-20 bg-gray-950/90 border border-[#D49942]/90 shadow-[0_0_25px_rgba(212,153,66,0.4)] backdrop-blur-sm opacity-100 scale-100';
  } else if (cursorState === 'drag') {
    ringClasses +=
      ' w-16 h-16 bg-[#D49942]/90 text-white border border-white/60 shadow-[0_0_20px_rgba(212,153,66,0.35)] opacity-100 scale-100';
  } else if (cursorState === 'hover') {
    ringClasses +=
      ' w-12 h-12 bg-[#D49942]/15 border-2 border-[#D49942] shadow-[0_0_20px_rgba(212,153,66,0.35)] opacity-100 scale-100';
  } else {
    // Default state
    ringClasses +=
      ' w-8 h-8 bg-transparent border border-[#D49942]/70 shadow-[0_0_10px_rgba(212,153,66,0.2)] opacity-80';
    if (isClicked) {
      ringClasses += ' scale-75';
    }
  }

  // Inner dot class
  let dotClasses =
    'fixed top-0 left-0 pointer-events-none rounded-full transition-[width,height,opacity,transform,background-color] duration-150 ease-out z-[10000]';

  if (!isVisible) {
    dotClasses += ' opacity-0 scale-0';
  } else if (cursorState === 'view' || cursorState === 'drag') {
    dotClasses += ' opacity-0 scale-0';
  } else if (cursorState === 'hover') {
    dotClasses += ' w-2 h-2 bg-[#D49942] opacity-80 scale-100 shadow-[0_0_8px_#D49942]';
  } else {
    dotClasses += ' w-2 h-2 bg-[#D49942] opacity-100 shadow-[0_0_6px_#D49942]';
    if (isClicked) {
      dotClasses += ' scale-125 bg-[#B97C2A]';
    }
  }

  return (
    <>
      {/* 1. Global Ambient Spotlight Layer */}
      <div
        ref={spotlightElRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[40] transition-opacity duration-500"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* 2. Gold Stardust Particle Trail Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9990]"
      />

      {/* 3. Click Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          onAnimationEnd={() => removeRipple(ripple.id)}
          className="fixed pointer-events-none rounded-full border border-[#D49942] animate-mouseRipple z-[9995]"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* 4. Fluid Trailing Halo Ring */}
      <div ref={ringElRef} className={ringClasses} aria-hidden="true">
        {cursorState === 'view' && (
          <span className="text-[10px] font-black tracking-widest text-[#E6AA4D] uppercase px-1">
            {cursorText || 'EXPLORE'}
          </span>
        )}
        {cursorState === 'drag' && (
          <span className="text-[9px] font-black tracking-widest text-white uppercase px-1">
            {cursorText || 'DRAG'}
          </span>
        )}
      </div>

      {/* 5. Precision Center Dot */}
      <div ref={dotElRef} className={dotClasses} aria-hidden="true" />
    </>
  );
};

export default MouseTracker;
