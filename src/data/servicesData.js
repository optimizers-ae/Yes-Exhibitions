import hero1 from '../assets/hero_1.png';
import hero2 from '../assets/hero_2.png';
import hero3 from '../assets/hero_3.png';
import aboutBannerJpg from '../assets/AboutBanner.jpeg';
import aboutBannerPng from '../assets/about_banner.png';

import {
  Building2,
  Layers,
  Globe,
  ShieldCheck,
  Monitor,
  LayoutGrid,
  Box,
  Lightbulb,
  Wrench,
  Ruler,
  CheckCircle2,
  Award,
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react';

export const servicesData = {
  'custom-exhibition-stands': {
    id: '01',
    slug: 'custom-exhibition-stands',
    title: 'Custom Exhibition Stands',
    highlightTitle: 'Stands Architecture',
    subtitle: 'Bespoke stand architecture tailored to your brand identity',
    bannerImage: hero1,
    showcaseImage: hero2,
    secondaryImage: hero3,
    category: 'Bespoke Stand Design',
    heading: 'Tailored Architecture for Maximum Brand Impact',
    description:
      'At YES Exhibition, we design and construct bespoke custom exhibition stands crafted around your exact brand identity, product showcase requirements, and visitor engagement strategy. Combining high-end fabrication, precision spatial engineering, and custom branding solutions, we transform floor space into immersive branded environments that attract foot traffic and deliver measurable event ROI.',
    bulletFeatures: [
      {
        title: '3D Concept & Spatial Design',
        desc: 'Photorealistic 3D renderings and spatial floor planning tailored to visitor traffic flow, brand sightlines, and interactive engagement zones.',
        icon: Box
      },
      {
        title: 'Premium Material Selection & Fabrication',
        desc: 'Precision craftsmanship using sustainable high-grade timber, structural aluminum matrix, high-gloss finishes, and custom millwork.',
        icon: Layers
      },
      {
        title: 'Complete On-Site Installation & Dismantling',
        desc: 'Seamless end-to-end logistics with certified venue installation teams, on-site supervision, and rapid post-event dismantling.',
        icon: Wrench
      },
      {
        title: 'Integrated AV & Lighting Solutions',
        desc: 'High-impact LED backlight walls, ambient architectural ceiling halos, interactive touch kiosks, and dynamic sound integration.',
        icon: Lightbulb
      }
    ],
    technicalSpecs: [
      { title: 'Spatial Geometry', desc: 'Optimized layouts engineered for 9 sqm to 500+ sqm spaces, maximizing height allowances.', icon: Ruler },
      { title: 'Architectural Lighting', desc: 'Integrated COB LED strip lighting, back-lit tension fabric walls, and overhead halo rings.', icon: Lightbulb },
      { title: 'Custom Millwork', desc: 'Bespoke reception desks, display pedestals, VIP lounges, and lockable storage rooms.', icon: Layers },
      { title: 'AV & Smart Displays', desc: 'Seamless video walls, interactive touchscreen kiosks, and spatial sound integration.', icon: Monitor }
    ],
    faqs: [
      {
        q: 'What is included in a turnkey custom exhibition stand project?',
        a: 'Our turnkey service covers everything from initial spatial concept, detailed 3D renderings, venue organizer approvals, structural engineering, workshop fabrication, graphics printing, transport, on-site installation, technical support, and post-show dismantling.'
      },
      {
        q: 'How far in advance should we start designing our custom stand?',
        a: 'We recommend starting 6 to 10 weeks before your event date to allow ample time for 3D revisions, venue approvals, custom fabrication, and pre-assembly testing.'
      },
      {
        q: 'Can custom exhibition stand components be reused for future shows?',
        a: 'Yes! We design custom stands with modular, smart structural engineering, allowing key architectural structures, LED lighting elements, and printed graphics to be reconfigured for different booth sizes at future exhibitions.'
      }
    ]
  },

  'double-decker-stands': {
    id: '02',
    slug: 'double-decker-stands',
    title: 'Double Decker Stands',
    highlightTitle: 'Multi-Level Presence',
    subtitle: 'Two-story exhibition structures designed for maximum brand presence and footprint utilization',
    bannerImage: hero2,
    showcaseImage: hero3,
    secondaryImage: hero1,
    category: 'Multi-Level Architecture',
    heading: 'Expand Vertically to Dominate the Exhibition Floor',
    description:
      'Double decker stands double your available floor area without doubling your booth footprint fees. Create executive VIP meeting suites, private hospitality lounges, and elevated product demonstration stages that command attention across the entire hall.',
    bulletFeatures: [
      {
        title: 'Structural Steel Engineering & Certification',
        desc: 'Engineered multi-tier structural frames certified by venue safety engineers to withstand heavy weight capacities and high foot traffic.',
        icon: ShieldCheck
      },
      {
        title: 'Private Executive VIP Lounges',
        desc: 'Dedicated sound-isolated upper deck meeting areas equipped with luxury seating, hospitality bars, and private discussion zones.',
        icon: Building2
      },
      {
        title: 'Commanding Architectural Height',
        desc: 'Elevated brand visibility featuring towering LED lightboxes and high-level graphic branding visible from all hall entrances.',
        icon: Sparkles
      },
      {
        title: 'Turnkey Multi-Level Logistics',
        desc: 'Complete venue permit management, structural calculation sign-offs, specialized rigging, and rapid double-decker assembly.',
        icon: Wrench
      }
    ],
    technicalSpecs: [
      { title: 'Structural Capacity', desc: 'Heavy-duty certified steel matrix engineered for up to 500 kg/m² upper deck loading.', icon: ShieldCheck },
      { title: 'Staircase Architecture', desc: 'Bespoke floating or spiral staircases with integrated LED step illumination and glass handrails.', icon: Layers },
      { title: 'Acoustic Soundproofing', desc: 'Acoustically insulated meeting pod walls for confidential executive client discussions.', icon: Box },
      { title: 'Elevated Branding', desc: '360-degree top perimeter graphics and illuminated halo logos elevated up to 6 meters high.', icon: Sparkles }
    ],
    faqs: [
      {
        q: 'Are double decker stands permitted at all exhibition venues?',
        a: 'Double decker stands require venue ceiling clearance (usually 6m+) and organizer approval. YES Exhibition handles all structural engineering calculations and venue approvals.'
      },
      {
        q: 'How long does it take to assemble a double decker stand on site?',
        a: 'Typical assembly takes 3 to 4 days, depending on venue access. Pre-assembly in our workshop guarantees rapid, flawless on-site installation.'
      }
    ]
  },

  'country-trade-pavilions': {
    id: '03',
    slug: 'country-trade-pavilions',
    title: 'Country & Trade Pavilions',
    highlightTitle: 'Global Pavilion Solutions',
    subtitle: 'National pavilions and large-scale group exhibition spaces uniting global brands',
    bannerImage: hero3,
    showcaseImage: aboutBannerPng,
    secondaryImage: hero1,
    category: 'Large-Scale Group Exhibition',
    heading: 'Unified Architectural Identity for Group Exhibitors',
    description:
      'We conceptualize, engineer, and build large-scale country pavilions and group exhibition areas for governments, export councils, and industry trade associations. Our designs balance strong unified national branding with individualized exhibitor sub-booths.',
    bulletFeatures: [
      {
        title: 'Unified Overhead Pavilion Branding',
        desc: 'Imposing national archways, suspended glowing canopies, and high-impact pavilion entrance gateways.',
        icon: Globe
      },
      {
        title: 'Modular Multi-Exhibitor Kiosks',
        desc: 'Flexible individual exhibitor pods complete with branded graphics, product displays, counters, and power hookups.',
        icon: LayoutGrid
      },
      {
        title: 'Central Reception & Trade Lounge',
        desc: 'Shared networking lounges, delegation reception desks, press conference stages, and VIP hospitality services.',
        icon: Building2
      },
      {
        title: 'Full Delegation Management',
        desc: 'End-to-end coordination for 10 to 100+ co-exhibitors including graphics intake, power distribution, and on-site support.',
        icon: ShieldCheck
      }
    ],
    technicalSpecs: [
      { title: 'Total Pavilion Scale', desc: 'Scalable solutions designed for 100 sqm to 2,000+ sqm multi-exhibitor footprints.', icon: Ruler },
      { title: 'Individual Pod Systems', desc: 'Standardized or custom sub-booths with lockable storage and independent branding.', icon: Box },
      { title: 'Central Hospitality Hub', desc: 'Integrated coffee bars, catering service zones, and delegate meeting spaces.', icon: Building2 },
      { title: 'Multi-lingual Graphics', desc: 'High-resolution tension fabric printing with crisp typography and international compliance.', icon: Monitor }
    ],
    faqs: [
      {
        q: 'Can co-exhibitors customize their individual booth areas within the pavilion?',
        a: 'Yes, we provide customizable graphic inserts, counter options, and digital screen upgrades for each participating company while keeping overall pavilion harmony.'
      }
    ]
  },

  'turnkey-project-management': {
    id: '04',
    slug: 'turnkey-project-management',
    title: 'Turnkey Project Management',
    highlightTitle: 'End-to-End Execution',
    subtitle: '3D design, engineering, approvals, fabrication & complete on-site build',
    bannerImage: aboutBannerJpg,
    showcaseImage: hero1,
    secondaryImage: hero2,
    category: 'Full Service Project Management',
    heading: 'Zero-Stress Exhibition Execution from Concept to Handover',
    description:
      'Our turnkey service gives you a single dedicated project manager handling 100% of your exhibition project — design renderings, venue documentation, structural calculations, fabrication, freight logistics, build-up, and final show handover.',
    bulletFeatures: [
      {
        title: 'Single Point of Contact',
        desc: 'Dedicated Senior Project Manager overseeing timelines, venue coordination, budget, and daily progress updates.',
        icon: ShieldCheck
      },
      {
        title: '100% Venue Approvals & RAMS',
        desc: 'Complete management of Risk Assessments, Method Statements, structural calculations, and electrical submissions.',
        icon: Award
      },
      {
        title: 'Workshop Pre-Build Inspection',
        desc: 'We pre-assemble your custom booth in our workshop for visual preview and quality check before event shipping.',
        icon: Wrench
      },
      {
        title: '24/7 On-Site Stand Supervision',
        desc: 'Dedicated stand standby technicians available throughout show days to assist with lighting, AV, or last-minute needs.',
        icon: Zap
      }
    ],
    technicalSpecs: [
      { title: 'Pre-Build Assembly', desc: 'Full workshop pre-rigging guarantees 0% error rate on event venue floor.', icon: Wrench },
      { title: 'Logistics Fleet', desc: 'Dedicated air, sea, and land freight tracking to global exhibition halls.', icon: Globe },
      { title: 'On-Site Technicians', desc: 'Electricians, audio-visual engineers, and carpenters on standby throughout the event.', icon: ShieldCheck },
      { title: 'Post-Show Dismantling', desc: 'Eco-friendly breakdown, component recycling, or secure warehouse storage.', icon: Box }
    ],
    faqs: [
      {
        q: 'What is required from our side during a turnkey project?',
        a: 'Simply provide your brand assets and stand preferences. We take care of design, venue paperwork, build-up, and handover.'
      }
    ]
  },

  '3d-design-visualization': {
    id: '05',
    slug: '3d-design-visualization',
    title: '3D Design & Visualization',
    highlightTitle: 'Photorealistic 3D Renders',
    subtitle: 'Detailed 3D concepts and visualizations allowing you to preview your stand before build',
    bannerImage: hero1,
    showcaseImage: hero3,
    secondaryImage: hero2,
    category: 'Creative Design & CAD',
    heading: 'Experience Your Exhibition Stand in Photorealistic 3D',
    description:
      'Our architectural design studio creates hyper-realistic 3D renders, spatial floor plans, and 360-degree fly-through animations. Preview lighting effects, material textures, graphic placements, and visitor sightlines before a single panel is built.',
    bulletFeatures: [
      {
        title: 'Photorealistic 4K Renders',
        desc: 'Accurate material textures, glass reflections, ambient lighting simulations, and exact brand pantone matching.',
        icon: Monitor
      },
      {
        title: 'Spatial CAD & Floor Plans',
        desc: 'Dimensioned technical architectural drawings optimized for exhibitor approval and venue organizer submission.',
        icon: Ruler
      },
      {
        title: '360° Virtual Walkthroughs',
        desc: 'Immersive digital walkthroughs allowing internal stakeholders to experience visitor flow and booth sightlines.',
        icon: Cpu
      },
      {
        title: 'Unlimited Design Iterations',
        desc: 'Collaborative refinement process until your team achieves 100% design alignment and satisfaction.',
        icon: Sparkles
      }
    ],
    technicalSpecs: [
      { title: 'Render Resolution', desc: 'Ultra High Definition 4K renders from multiple camera perspectives.', icon: Monitor },
      { title: 'Technical CAD Package', desc: 'Complete dimensioned elevation plans, lighting layouts, and exploded structural diagrams.', icon: Ruler },
      { title: 'VR Preview Ready', desc: 'Compatible 3D model formats for virtual reality headsets and interactive web viewers.', icon: Cpu },
      { title: 'Material Samples', desc: 'Physical sample swatches dispatched to your office alongside digital 3D renders.', icon: Layers }
    ],
    faqs: [
      {
        q: 'How long does a 3D design concept take?',
        a: 'Initial 3D design concepts are typically delivered within 3 to 5 business days after receiving your design brief.'
      }
    ]
  },

  'modular-exhibition-stands': {
    id: '06',
    slug: 'modular-exhibition-stands',
    title: 'Modular Exhibition Stands',
    highlightTitle: 'Flexible & Reusable',
    subtitle: 'Adaptable modular stand systems engineered for multi-event efficiency and sustainability',
    bannerImage: aboutBannerPng,
    showcaseImage: hero2,
    secondaryImage: hero1,
    category: 'Flexible Exhibition Systems',
    heading: 'Smart Reusable Stand Architecture for Multiple Events',
    description:
      'For brands exhibiting across multiple trade shows per year, our modular stand systems offer reusable, reconfigurable, and eco-friendly booth designs. Reframe components to fit 3x3m, 6x3m, or 6x6m spaces effortlessly while cutting cost per show.',
    bulletFeatures: [
      {
        title: 'Reconfigurable Aluminum Matrix',
        desc: 'Interlocking structural frame systems that re-shape into diverse booth layouts and sizes for future events.',
        icon: LayoutGrid
      },
      {
        title: 'Seamless Tension Fabric Graphics',
        desc: 'Lightweight, washable, crease-resistant silicone edge graphics (SEG) that install rapidly and look pristine.',
        icon: Layers
      },
      {
        title: 'Compact Transport & Eco Savings',
        desc: 'Packable into flight cases, significantly lowering shipping weight, carbon footprint, and logistics expenses.',
        icon: ShieldCheck
      },
      {
        title: 'Tool-Free Rapid Assembly',
        desc: 'Quick lock mechanisms ensuring fast build times and reduced venue labor hours.',
        icon: Wrench
      }
    ],
    technicalSpecs: [
      { title: 'Frame Modular Grid', desc: 'Precision engineered aluminum profile system with toolless connector locks.', icon: LayoutGrid },
      { title: 'Graphic System', desc: 'Dye-sublimated fabric SEG graphics with vibrant edge-to-edge color saturation.', icon: Monitor },
      { title: 'Case Storage', desc: 'Heavy-duty wheeled flight cases for easy transport and long-term storage.', icon: Box },
      { title: 'Eco Certification', desc: '100% recyclable aluminum components and reusable fabric graphics.', icon: ShieldCheck }
    ],
    faqs: [
      {
        q: 'Can modular stands look as custom as traditional timber booths?',
        a: 'Yes! Our modern SEG backlit fabrics, custom wooden counters, and integrated AV elements give modular stands a sleek, high-end custom appearance.'
      }
    ]
  }
};

export const defaultServiceSlug = 'custom-exhibition-stands';
