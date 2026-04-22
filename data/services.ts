export interface Service {
  id: number
  name: string
  description: string
  benefits: string[]
  icon: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'install',
    title: 'Installation & upgrades',
    description: 'New systems and property improvements.',
    services: [
      {
        id: 1,
        name: 'Boiler installation',
        description:
          "Professional installation of new gas, oil, or LPG boilers — sized for your home and installed to manufacturer standards.",
        benefits: [
          'Full assessment and right-sizing',
          'Manufacturer-approved installation',
          'Warranty and paperwork handled',
        ],
        icon: 'Zap',
      },
      {
        id: 2,
        name: 'Central heating installation',
        description:
          'Complete central heating for gas, oil, or LPG — system design, pipework, radiators, and commissioning.',
        benefits: [
          'System design to suit your home',
          'Quality components and clean fitting',
          'Balanced, efficient performance',
        ],
        icon: 'Home',
      },
      {
        id: 3,
        name: 'Radiators & upgrades',
        description:
          'New radiators, replacements, and heating upgrades to improve comfort and efficiency.',
        benefits: [
          'Style and size options to suit your rooms',
          'Improved heat distribution',
          'Professional installation',
        ],
        icon: 'Grid',
      },
    ],
  },
  {
    id: 'servicing',
    title: 'Servicing & system care',
    description: "Annual service and looking after the system's health.",
    services: [
      {
        id: 4,
        name: 'Annual boiler servicing',
        description:
          'Routine servicing to keep your boiler safe, efficient, and within warranty where applicable.',
        benefits: [
          'Thorough safety and efficiency checks',
          'Helps catch issues before they become breakdowns',
          'Documentation for your records',
        ],
        icon: 'Wrench',
      },
      {
        id: 5,
        name: 'System power flushing',
        description:
          'Cleans the heating system to clear sludge and improve circulation and efficiency.',
        benefits: [
          'Better heat across radiators',
          'Less strain on the boiler and pump',
          'Ideal when upgrading a boiler or radiators',
        ],
        icon: 'Wind',
      },
      {
        id: 6,
        name: 'Oil & LPG boiler servicing',
        description:
          'Specialist servicing for oil and LPG heating, including the checks these fuels need.',
        benefits: [
          'OFTEC-relevant experience',
          'Safe, efficient running',
          'Helpful for rural and LPG properties',
        ],
        icon: 'Fuel',
      },
    ],
  },
  {
    id: 'repairs',
    title: 'Repairs & emergencies',
    description: 'When something has gone wrong, we get you back up and running.',
    services: [
      {
        id: 7,
        name: 'Boiler & heating repairs',
        description:
          'Diagnostics and repairs for gas, oil, and LPG boilers and the wider heating system.',
        benefits: [
          'Clear explanation of the fault and options',
          'Quality parts where appropriate',
          'Transparent approach — request a custom quote for work',
        ],
        icon: 'AlertCircle',
      },
      {
        id: 8,
        name: 'Emergency call-outs',
        description:
          'Rapid help when you have no heating or hot water — we prioritise getting your home safe and warm again.',
        benefits: [
          'Responsive service when you need it most',
          'Experienced fault-finding',
          'Same-day / urgent support where we can',
        ],
        icon: 'AlertTriangle',
      },
    ],
  },
]

export const allServices: Service[] = serviceCategories.flatMap((c) => c.services)

/** Flat list for quote / contact form dropdowns */
export const services = allServices
