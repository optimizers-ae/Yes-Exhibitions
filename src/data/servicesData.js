// Dynamically import all exhibition images
const rawEventImages = import.meta.glob(
  [
    '../assets/evet_images/*.jpeg',
    '../assets/evet_images/*.jpg',
    '../assets/evet_images/*.png',
    '../assets/evet_images/*.webp'
  ],
  {
    eager: true,
    import: 'default'
  }
);

const eventImageList = Object.values(rawEventImages);

const getEventImage = (pattern, fallbackIdx = 0) => {
  const matchKey = Object.keys(rawEventImages).find((key) =>
    key.includes(pattern)
  );

  return matchKey
    ? rawEventImages[matchKey]
    : eventImageList[fallbackIdx] || '';
};


// ======================================================
// SERVICE IMAGE MAPPING
// ======================================================

const standDesignBg = getEventImage(
  '9.58.10 PM (1).jpeg',
  16
);

const visualizationBg = getEventImage(
  'images 1 (1).jpg',
  0
);

const productionBg = getEventImage(
  '11.13.34 AM.jpeg',
  56
);

const brandingGraphicsBg = getEventImage(
  '11.15.06 AM.jpeg',
  60
);

const installationBg = getEventImage(
  '9.58.33 PM (1).jpeg',
  34
);

const coordinationBg = getEventImage(
  'images 1 (6).jpg',
  5
);


// ======================================================
// EXTRA SHOWCASE IMAGES
// ======================================================

const showcase1 = getEventImage(
  '9.58.07 PM.jpeg',
  11
);

const showcase2 = getEventImage(
  '9.58.09 PM (2).jpeg',
  15
);

const showcase3 = getEventImage(
  '9.58.35 PM.jpeg',
  33
);

const showcase4 = getEventImage(
  '11.13.55 AM.jpeg',
  57
);

const showcase5 = getEventImage(
  '11.14.25 AM.jpeg',
  59
);

const showcase6 = getEventImage(
  '11.16.00 AM.jpeg',
  62
);


// ======================================================
// ICONS
// ======================================================

import {
  Building2,
  Monitor,
  Wrench,
  Sparkles,
  Layers,
  ShieldCheck,
  Box,
  Ruler,
  LayoutGrid,
  Lightbulb
} from 'lucide-react';


// ======================================================
// SERVICES DATA
// ======================================================

export const servicesData = {

  // ====================================================
  // 01 — EXHIBITION STAND DESIGN
  // ====================================================

  'exhibition-stand-design': {
    id: '01',

    slug: 'exhibition-stand-design',

    title: 'Exhibition Stand Design',

    highlightTitle: 'Stand Design',

    subtitle:
      'Creative concepts developed around your brand identity, objectives and exhibition space.',

    category: 'Creative Stand Design',

    desc:
      'Creative exhibition stand concepts developed around your brand identity, objectives, available space and visitor experience.',

    icon: Building2,

    bannerImage: standDesignBg,
    cardImage: standDesignBg,
    image: standDesignBg,

    showcaseImage: showcase1,
    secondaryImage: showcase2,

    tags: [
      'Concept Development',
      'Space Planning',
      'Brand Integration',
      'Visitor Experience'
    ],

    heading:
      'Exhibition Spaces Designed Around Your Brand',

    description:
      'We develop exhibition stand concepts around your brief, brand identity, objectives and allocated space, creating a clear visual direction before the project moves into visualization and production.',

    bulletFeatures: [
      {
        title: 'Brand-Led Concepts',

        desc:
          'Stand concepts shaped around your visual identity, campaign message and exhibition goals.',

        icon: Sparkles
      },

      {
        title: 'Space Planning',

        desc:
          'Layouts planned around available floor area, visitor movement and the functions required inside the stand.',

        icon: Ruler
      },

      {
        title: 'Functional Zones',

        desc:
          'Reception, display, meeting, storage and hospitality areas arranged according to the project brief.',

        icon: LayoutGrid
      },

      {
        title: 'Design Development',

        desc:
          'Concept refinement before the approved direction moves into 3D visualization and production.',

        icon: Building2
      }
    ],

    technicalSpecs: [
      {
        title: 'Brand Integration',

        desc:
          'Architecture, finishes and graphics developed as one consistent brand environment.',

        icon: Sparkles
      },

      {
        title: 'Spatial Layout',

        desc:
          'Planning adapted to the assigned stand size and exhibition requirements.',

        icon: Ruler
      },

      {
        title: 'Display Planning',

        desc:
          'Product, screen and communication areas positioned as part of the overall concept.',

        icon: Monitor
      },

      {
        title: 'Production Ready',

        desc:
          'Approved concepts are prepared for visualization, detailing and fabrication.',

        icon: Wrench
      }
    ],

    faqs: [
      {
        q:
          'What information do you need to start an exhibition stand design?',

        a:
          'The starting point is your brand material, exhibition space, project objectives and the functions you want the stand to support.'
      }
    ]
  },


  // ====================================================
  // 02 — 3D VISUALIZATION
  // ====================================================

  '3d-visualization': {
    id: '02',

    slug: '3d-visualization',

    title: '3D Visualization',

    highlightTitle: 'Visualization',

    subtitle:
      'Detailed visual concepts that allow you to experience the proposed stand before production.',

    category: '3D Design Preview',

    desc:
      'Detailed 3D visuals help you understand the proposed stand, review key design elements and approve the direction before production.',

    icon: Monitor,

    bannerImage: visualizationBg,
    cardImage: visualizationBg,
    image: visualizationBg,

    showcaseImage: visualizationBg,
    secondaryImage: showcase3,

    tags: [
      '3D Concepts',
      'Material Preview',
      'Lighting Preview',
      'Design Approval'
    ],

    heading:
      'See the Stand Before It Is Built',

    description:
      '3D visualization translates the approved concept into a clear visual preview so the layout, materials, graphics, lighting and overall appearance can be reviewed before fabrication begins.',

    bulletFeatures: [
      {
        title: 'Detailed 3D Views',

        desc:
          'Visual perspectives that communicate the proposed stand design from useful viewing angles.',

        icon: Monitor
      },

      {
        title: 'Material & Finish Preview',

        desc:
          'A visual indication of proposed surfaces, finishes and key architectural elements.',

        icon: Layers
      },

      {
        title: 'Graphic Placement Review',

        desc:
          'Branding and visual communication can be reviewed within the proposed stand environment.',

        icon: Sparkles
      },

      {
        title: 'Pre-Production Approval',

        desc:
          'The visual direction can be reviewed and refined before it moves into production.',

        icon: ShieldCheck
      }
    ],

    technicalSpecs: [
      {
        title: 'Stand Views',

        desc:
          'Clear visual perspectives of the proposed exhibition environment.',

        icon: Monitor
      },

      {
        title: 'Layout Review',

        desc:
          'Space allocation and key functional areas can be checked before production.',

        icon: Ruler
      },

      {
        title: 'Brand Preview',

        desc:
          'Logos, graphics and communication elements shown within the design.',

        icon: Sparkles
      },

      {
        title: 'Design Sign-Off',

        desc:
          'Approved visuals provide a clear reference for the next project stage.',

        icon: ShieldCheck
      }
    ],

    faqs: [
      {
        q:
          'Why is 3D visualization important before production?',

        a:
          'It gives the client a clear preview of the proposed stand and allows important design decisions to be reviewed before fabrication starts.'
      }
    ]
  },


  // ====================================================
  // 03 — STAND PRODUCTION
  // ====================================================

  'stand-production': {
    id: '03',

    slug: 'stand-production',

    title: 'Stand Production',

    highlightTitle: 'Production',

    subtitle:
      'Turning approved designs into physical exhibition environments with attention to materials, finishes and details.',

    category: 'Fabrication & Production',

    desc:
      'Approved stand designs are transformed into physical exhibition elements through fabrication, finishing and production preparation.',

    icon: Wrench,

    bannerImage: productionBg,
    cardImage: productionBg,
    image: productionBg,

    showcaseImage: showcase4,
    secondaryImage: showcase5,

    tags: [
      'Fabrication',
      'Material Finishes',
      'Joinery',
      'Quality Control'
    ],

    heading:
      'From Approved Design to Physical Build',

    description:
      'The production stage converts the approved design into the components required for the exhibition stand, with attention to materials, finishes, detailing and readiness for site installation.',

    bulletFeatures: [
      {
        title: 'Fabrication',

        desc:
          'Production of the stand components according to the approved design direction.',

        icon: Wrench
      },

      {
        title: 'Material Preparation',

        desc:
          'Selected materials and surfaces prepared for the required visual and functional finish.',

        icon: Layers
      },

      {
        title: 'Detailed Finishing',

        desc:
          'Attention to visible edges, surfaces, counters, display elements and other stand details.',

        icon: Box
      },

      {
        title: 'Production Checks',

        desc:
          'Stand elements reviewed before they are prepared for delivery and site installation.',

        icon: ShieldCheck
      }
    ],

    technicalSpecs: [
      {
        title: 'Workshop Production',

        desc:
          'Stand elements fabricated and prepared in a controlled production environment.',

        icon: Wrench
      },

      {
        title: 'Finish Preparation',

        desc:
          'Surfaces prepared according to the approved visual direction.',

        icon: Layers
      },

      {
        title: 'Component Planning',

        desc:
          'Individual elements organized for transport and on-site assembly.',

        icon: Box
      },

      {
        title: 'Build Readiness',

        desc:
          'Completed production elements prepared for the installation stage.',

        icon: ShieldCheck
      }
    ],

    faqs: [
      {
        q:
          'When does stand production begin?',

        a:
          'Production begins after the design direction and required project details have been approved.'
      }
    ]
  },


  // ====================================================
  // 04 — BRANDING & GRAPHICS
  // ====================================================

  'branding-graphics': {
    id: '04',

    slug: 'branding-graphics',

    title: 'Branding & Graphics',

    highlightTitle: 'Graphics',

    subtitle:
      'Integrated visual communication that ensures your brand is clearly represented throughout the stand.',

    category: 'Visual Communication',

    desc:
      'Branding, signage and exhibition graphics are integrated throughout the stand so the space communicates one clear and consistent identity.',

    icon: Sparkles,

    bannerImage: brandingGraphicsBg,
    cardImage: brandingGraphicsBg,
    image: brandingGraphicsBg,

    showcaseImage: showcase3,
    secondaryImage: showcase6,

    tags: [
      'Large-Format Graphics',
      'Brand Application',
      'Signage',
      'Display Graphics'
    ],

    heading:
      'Clear Brand Communication Across the Stand',

    description:
      'Branding and graphics connect the physical stand with your visual identity, helping logos, messages, product communication and display content appear consistently across the exhibition environment.',

    bulletFeatures: [
      {
        title: 'Brand Application',

        desc:
          'Logo, colors and visual identity applied consistently across suitable stand surfaces.',

        icon: Sparkles
      },

      {
        title: 'Exhibition Graphics',

        desc:
          'Printed visual communication prepared for walls, panels, counters and display areas.',

        icon: Monitor
      },

      {
        title: 'Signage & Messaging',

        desc:
          'Key messages and directional communication positioned where they can be clearly seen.',

        icon: Lightbulb
      },

      {
        title: 'Production Coordination',

        desc:
          'Graphics prepared to work with the physical dimensions and finishes of the stand.',

        icon: Wrench
      }
    ],

    technicalSpecs: [
      {
        title: 'Graphic Placement',

        desc:
          'Brand communication planned around the stand architecture.',

        icon: LayoutGrid
      },

      {
        title: 'Print Preparation',

        desc:
          'Artwork prepared for suitable exhibition graphic applications.',

        icon: Monitor
      },

      {
        title: 'Visual Consistency',

        desc:
          'Brand elements coordinated across multiple surfaces and touchpoints.',

        icon: Sparkles
      },

      {
        title: 'Stand Integration',

        desc:
          'Graphics aligned with production dimensions and installation requirements.',

        icon: Ruler
      }
    ],

    faqs: [
      {
        q:
          'Can you apply our existing brand guidelines to the exhibition stand?',

        a:
          'Yes. The branding and graphics stage is designed to translate your approved visual identity into the exhibition environment.'
      }
    ]
  },


  // ====================================================
  // 05 — INSTALLATION & DISMANTLING
  // ====================================================

  'installation-dismantling': {
    id: '05',

    slug: 'installation-dismantling',

    title: 'Installation & Dismantling',

    highlightTitle: 'Dismantling',

    subtitle:
      'Professional coordination of the installation and dismantling process.',

    category: 'On-Site Execution',

    desc:
      'The stand is coordinated on site for installation before the exhibition and dismantling after the event.',

    icon: Layers,

    bannerImage: installationBg,
    cardImage: installationBg,
    image: installationBg,

    showcaseImage: showcase2,
    secondaryImage: showcase1,

    tags: [
      'On-Site Setup',
      'Site Coordination',
      'Final Checks',
      'Dismantling'
    ],

    heading:
      'Coordinated Build-Up and Breakdown on Site',

    description:
      'Installation and dismantling connect workshop production with the exhibition venue, coordinating the physical setup, final stand checks and post-event breakdown process.',

    bulletFeatures: [
      {
        title: 'On-Site Installation',

        desc:
          'Stand components assembled and positioned at the exhibition venue.',

        icon: Wrench
      },

      {
        title: 'Site Coordination',

        desc:
          'Build activities coordinated around the project requirements and venue schedule.',

        icon: ShieldCheck
      },

      {
        title: 'Final Stand Checks',

        desc:
          'Key stand elements reviewed before project handover.',

        icon: Building2
      },

      {
        title: 'Post-Event Dismantling',

        desc:
          'The stand is taken down in a coordinated way after the exhibition closes.',

        icon: Layers
      }
    ],

    technicalSpecs: [
      {
        title: 'Build-Up',

        desc:
          'Assembly of production elements at the event location.',

        icon: Wrench
      },

      {
        title: 'Finishing',

        desc:
          'Final adjustments and presentation checks during site setup.',

        icon: Sparkles
      },

      {
        title: 'Handover',

        desc:
          'Stand prepared for client use before the exhibition begins.',

        icon: ShieldCheck
      },

      {
        title: 'Breakdown',

        desc:
          'Coordinated dismantling after the event.',

        icon: Layers
      }
    ],

    faqs: [
      {
        q:
          'Does the service include both installation and dismantling?',

        a:
          'YES Exhibitions provides professional coordination of both the installation and dismantling process.'
      }
    ]
  },


  // ====================================================
  // 06 — PROJECT COORDINATION
  // ====================================================

  'project-coordination': {
    id: '06',

    slug: 'project-coordination',

    title: 'Project Coordination',

    highlightTitle: 'Coordination',

    subtitle:
      'A structured process from initial briefing through design, production and final delivery.',

    category: 'Project Delivery',

    desc:
      'A structured project process coordinates the brief, design, production, site execution and final delivery from beginning to completion.',

    icon: ShieldCheck,

    bannerImage: coordinationBg,
    cardImage: coordinationBg,
    image: coordinationBg,

    showcaseImage: showcase6,
    secondaryImage: showcase3,

    tags: [
      'Client Briefing',
      'Timeline Management',
      'Production Follow-Up',
      'Final Delivery'
    ],

    heading:
      'One Structured Process from Brief to Delivery',

    description:
      'Project coordination keeps the main stages connected, from the initial client brief through design development, production follow-up, site execution and final project delivery.',

    bulletFeatures: [
      {
        title: 'Initial Briefing',

        desc:
          'Project requirements, objectives, stand needs and available information organized at the start.',

        icon: Box
      },

      {
        title: 'Design Coordination',

        desc:
          'Design decisions and approvals kept aligned with the wider project process.',

        icon: Building2
      },

      {
        title: 'Production Follow-Up',

        desc:
          'Approved design information carried through into fabrication and preparation.',

        icon: Wrench
      },

      {
        title: 'Final Delivery',

        desc:
          'Project stages coordinated through site execution and final handover.',

        icon: ShieldCheck
      }
    ],

    technicalSpecs: [
      {
        title: 'Brief Management',

        desc:
          'Core project requirements organized into a clear working direction.',

        icon: Box
      },

      {
        title: 'Stage Coordination',

        desc:
          'Design, production and site stages connected within one project flow.',

        icon: LayoutGrid
      },

      {
        title: 'Progress Follow-Up',

        desc:
          'Key project steps tracked through the delivery process.',

        icon: ShieldCheck
      },

      {
        title: 'Completion',

        desc:
          'Final delivery coordinated as the project reaches exhibition readiness.',

        icon: Building2
      }
    ],

    faqs: [
      {
        q:
          'What does project coordination cover?',

        a:
          'It covers the structured flow from initial briefing through design, production and final delivery.'
      }
    ]
  }
};


// ======================================================
// EXPORT LIST
// ======================================================

export const servicesList = Object.values(servicesData);


// Default service opened when no slug exists
export const defaultServiceSlug = 'exhibition-stand-design';