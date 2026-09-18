import ScrollExpand from './ui/ScrollExpand';
import hero1Img from '../assets/hero_1.png';

const ImpactResultsSection = () => {
  return (
    <ScrollExpand
      src={hero1Img}
      alt="YES Exhibition Stand"
      title="FROM IDEA TO IMPACT"
      scrollHint="Scroll to explore"
      useWindowScroll
    >
      <div className="relative z-20 flex min-h-[80svh] sm:min-h-svh w-full items-end">
        {/* Dark readability gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="max-w-3xl mx-auto">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#E6A21A] sm:text-sm">
                The YES Impact
              </p>

              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Designed to Be Seen.
                <br />
                <span className="text-[#E6A21A]">
                  Built to Be Experienced.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                We create exhibition environments that strengthen brand presence,
                attract attention and create meaningful spaces for people to
                connect with your brand.
              </p>
            </div>

            {/* Impact Items */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border-t border-white/25 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
                  01
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Visibility
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  A stronger presence across the exhibition floor.
                </p>
              </div>

              <div className="border-t border-white/25 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
                  02
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Brand Experience
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Your identity transformed into a physical environment.
                </p>
              </div>

              <div className="border-t border-white/25 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
                  03
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Functionality
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Designed around visitors, products and movement.
                </p>
              </div>

              <div className="border-t border-white/25 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
                  04
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Detail
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/65">
                  Precision from the overall structure to the final finish.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ScrollExpand>
  );
};

export default ImpactResultsSection;
