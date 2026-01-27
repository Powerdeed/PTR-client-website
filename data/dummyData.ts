import { Blogs, Projects } from "@/lib/types/types";

export const coreValues = {
  values: {
    value1: {
      name: "Integrity",
      description: "We act honestly and ethically in all we do.",
      color: "#0a1f44",
    },
    value2: {
      name: "Excellence",
      description: "We strive for the highest standards and results.",
      color: "#0043b9",
    },
    value3: {
      name: "Innovation",
      description: "We embrace creativity and new ideas.",
      color: "#ffd600",
    },
    value4: {
      name: "Customer Focus",
      description: "We prioritize our clients’ needs and satisfaction.",
      color: "#ff0000",
    },
    value5: {
      name: "Teamwork",
      description: "We collaborate and support each other.",
      color: "#00c896",
    },
    value6: {
      name: "Safety",
      description: "We ensure a safe environment for all.",
      color: "#61ffd7",
    },
  },
};

export const testimonials = [
  {
    id: "6870da6360461b0545bb47e6",
    name: "John Doe",
    title: "CEO, Acme Corp",
    testimonial:
      "Powerdeed exceeded our expectations with their professionalism and expertise.",
    profilePic: "profile-image",
  },
  {
    id: "6870e4f7e43b11bdb76674b5",
    name: "Jane Smith",
    title: "Resident",
    testimonial: "The team was friendly and efficient. Highly recommended!",
    profilePic: "profile-image",
  },
  {
    id: "6870e52d5f5d5c2b57831af2",
    name: "Michael Brown",
    title: "Facility Manager",
    testimonial: "Their solutions are reliable and cost-effective.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5435f5d5c2b57831af5",
    name: "Emily White",
    title: "Homeowner",
    testimonial: "I am very satisfied with the service provided by Powerdeed.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5545f5d5c2b57831af8",
    name: "David Green",
    title: "Business Owner",
    testimonial: "Prompt response and excellent customer care.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5795f5d5c2b57831afb",
    name: "Sophia Lee",
    title: "Resident",
    testimonial: "They made the whole process seamless and easy.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5a55f5d5c2b57831afe",
    name: "Olivia Brown",
    title: "Property Manager",
    testimonial: "We will definitely work with Powerdeed again.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5b85f5d5c2b57831b01",
    name: "Daniel Kim",
    title: "Resident",
    testimonial: "Great value for money and top-notch service.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5cb5f5d5c2b57831b04",
    name: "Grace Wilson",
    title: "CEO, Wilson Enterprises",
    testimonial: "Professional, reliable, and trustworthy.",
    profilePic: "profile-image",
  },
];

export const services = [
  {
    id: "686cdfd3331af187616e70bc",
    name: "Electrical Installation",
    images: [
      "elecJobsConstruction",
      "electricalInstallation",
      "electricalInstallation2",
      "electricalInstallation3",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
  {
    id: "686ce09f331af187616e70bd",
    name: "Solar Installation",
    images: [
      "solarEnergy",
      "solarPanelImage",
      "solarPower",
      "solarResources",
      "solarRural",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
  {
    id: "686ce0cf331af187616e70be",
    name: "Generators",
    images: ["electricalInstallation2", "solarEnergy", "powerPost"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
  {
    id: "686ce0f8331af187616e70bf",
    name: "Automation",
    images: ["expansionProject", "industrialCommercial", "solarEnergy"],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
  {
    id: "686ce13b331af187616e70c1",
    name: "CCTV",
    images: [
      "solarResources",
      "industrialCommercial",
      "hydrogenProduction",
      "wasteRecycle",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
  {
    id: "686ce161331af187616e70c2",
    name: "Alarms",
    images: [
      "electricalInstallation",
      "solarRural",
      "electricalInstallation3",
      "gridScale",
    ],
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, reiciendis. Tempora corporis eligendi veniam maxime architecto sint nisi praesentium aspernatur, voluptatibus illo odit. Fugit expedita sapiente temporibus mollitia explicabo nostrum.",
  },
];

export const allProjectsArray = [
  {
    id: "686f8a913673b0db0950398b",
    category: "Electrical",
    projects: [
      {
        name: "Commercial Office Wiring Upgrade",
        images: [
          "expansionProject",
          "gridScale",
          "solarRural",
          "electricalInstallation",
        ],
        description:
          "Complete rewiring and electrical system upgrade for a multi-story commercial office building, ensuring compliance with modern safety standards.",
      },
    ],
  },
  {
    id: "686f8c333673b0db0950398d",
    category: "Electrical",
    projects: [
      {
        name: "Residential Smart Home Installation",
        images: [
          "solarPower",
          "electricalInstallation3",
          "electricalInstallation",
          "electricalInstallation2",
        ],
        description:
          "Installation of smart electrical systems, including automated lighting and energy-efficient wiring in a luxury residential estate.",
      },
    ],
  },
  {
    id: "686f955050a5c5fc27b617e2",
    category: "Electrical",
    projects: [
      {
        id: "686f955050a5c5fc27b617e3",
        name: "Industrial Panel Board Replacement",
        images: [
          "electricalInstallation3",
          "electricalInstallation",
          "gridScale",
          "electricalInstallation2",
        ],
        description:
          "Replacement and commissioning of outdated industrial panel boards to improve reliability and safety in a manufacturing facility.",
      },
    ],
  },
  {
    id: "686f95f450a5c5fc27b617ec",
    category: "Electrical",
    projects: [
      {
        id: "686f95f450a5c5fc27b617ed",
        name: "Hospital Emergency Power System",
        images: [
          "electricalInstallation2",
          "solarEnergy",
          "solarRural",
          "expansionProject",
        ],
        description:
          "Design and installation of a backup power system for critical care units in a regional hospital.",
      },
    ],
  },
  {
    id: "686f962750a5c5fc27b617f0",
    category: "Electrical",
    projects: [
      {
        id: "686f962750a5c5fc27b617f1",
        name: "School Electrical Renovation",
        images: [
          "electricalInstallation3",
          "gridScale",
          "solarRural",
          "solarRural",
        ],
        description:
          "Comprehensive electrical renovation for a public school, including new lighting, outlets, and surge protection.",
      },
    ],
  },
  {
    id: "686f967650a5c5fc27b617f4",
    category: "Solar",
    projects: [
      {
        id: "686f967650a5c5fc27b617f5",
        name: "Commercial Rooftop Solar PV System",
        images: [
          "hydrogenProduction",
          "solarPanelImage",
          "solarEnergy",
          "solarPower",
        ],
        description:
          "Installation of a high-capacity rooftop solar photovoltaic system for a shopping mall.",
      },
    ],
  },
  {
    id: "686f969c50a5c5fc27b617f8",
    category: "Solar",
    projects: [
      {
        id: "686f969c50a5c5fc27b617f9",
        name: "Residential Solar Water Heating",
        images: [
          "gridScale",
          "solarResources",
          "hydrogenProduction",
          "solarPower",
        ],
        description:
          "Integration of solar water heating panels in a residential housing project.",
      },
    ],
  },
  {
    id: "686f96c250a5c5fc27b617fc",
    category: "Solar",
    projects: [
      {
        id: "686f96c250a5c5fc27b617fd",
        name: "Solar-Powered Irrigation System",
        images: ["solarPower", "expansionProject", "powerPost", "wasteRecycle"],
        description:
          "Design and implementation of a solar-powered irrigation system for an agricultural farm.",
      },
    ],
  },
  {
    id: "686f96e750a5c5fc27b61800",
    category: "Solar",
    projects: [
      {
        id: "686f96e750a5c5fc27b61801",
        name: "Grid-Tied Solar Power Plant",
        images: [
          "hydrogenProduction",
          "expansionProject",
          "electricalInstallation2",
          "wasteRecycle",
        ],
        description:
          "Construction and commissioning of a grid-tied solar power plant for a municipal utility.",
      },
      {
        id: "686f96ee50a5c5fc27b61805",
        name: "Grid-Tied Solar Power Plant",
        images: [
          "hydrogenProduction",
          "expansionProject",
          "electricalInstallation2",
          "wasteRecycle",
        ],
        description:
          "Construction and commissioning of a grid-tied solar power plant for a municipal utility.",
      },
    ],
  },
  {
    id: "686f974e50a5c5fc27b61808",
    category: "Generators",
    projects: [
      {
        id: "686f974e50a5c5fc27b61809",
        name: "Hospital Standby Generator Installation",
        images: [
          "hydrogenProduction",
          "industrialCommercial",
          "solarPanelImage",
          "wasteRecycle",
        ],
        description:
          "Installation of high-capacity standby generators to ensure uninterrupted power supply for a hospital.",
      },
    ],
  },
  {
    id: "686f97a450a5c5fc27b6180c",
    category: "Generators",
    projects: [
      {
        id: "686f97a450a5c5fc27b6180d",
        name: "Industrial Diesel Generator Upgrade",
        images: [
          "expansionProject",
          "solarRural",
          "solarPanelImage",
          "powerPost",
        ],
        description:
          "Upgrade and maintenance of diesel generators for a large-scale manufacturing plant.",
      },
      {
        id: "686f97b150a5c5fc27b61811",
        name: "Industrial Diesel Generator Upgrade",
        images: [
          "expansionProject",
          "solarRural",
          "solarPanelImage",
          "powerPost",
        ],
        description:
          "Upgrade and maintenance of diesel generators for a large-scale manufacturing plant.",
      },
    ],
  },
  {
    id: "686f97e950a5c5fc27b61814",
    category: "Generators",
    projects: [
      {
        id: "686f97e950a5c5fc27b61815",
        name: "Commercial Generator Synchronization",
        images: [
          "hydrogenProduction",
          "solarEnergy",
          "electricalInstallation2",
          "electricalInstallation",
        ],
        description:
          "Synchronization of multiple generators for seamless power transfer in a commercial complex.",
      },
    ],
  },
  {
    id: "686f981350a5c5fc27b61818",
    category: "Generators",
    projects: [
      {
        id: "686f981350a5c5fc27b61819",
        name: "Data Center Backup Power Solution",
        images: [
          "electricalInstallation3",
          "electricalInstallation",
          "electricalInstallation2",
          "electricalInstallation3",
        ],
        description:
          "Design and installation of a backup generator system for a mission-critical data center.",
      },
    ],
  },
  {
    id: "686f983350a5c5fc27b6181c",
    category: "Generators",
    projects: [
      {
        id: "686f983350a5c5fc27b6181d",
        name: "Residential Estate Generator Supply",
        images: [
          "expansionProject",
          "solarResources",
          "electricalInstallation2",
          "hydrogenProduction",
        ],
        description:
          "Supply and installation of backup generators for a gated residential estate.",
      },
    ],
  },
  {
    id: "686f985b50a5c5fc27b61820",
    category: "Automation",
    projects: [
      {
        id: "686f985b50a5c5fc27b61821",
        name: "Factory Process Automation Upgrade",
        images: [
          "wasteRecycle",
          "powerPost",
          "industrialCommercial",
          "hydrogenProduction",
        ],
        description:
          "Upgrade of factory automation systems to improve production efficiency and reduce downtime.",
      },
    ],
  },
  {
    id: "686f987d50a5c5fc27b61824",
    category: "Automation",
    projects: [
      {
        id: "686f987d50a5c5fc27b61825",
        name: "Building Management System Integration",
        images: ["gridScale", "powerPost", "expansionProject", "wasteRecycle"],
        description:
          "Integration of a centralized building management system for automated control of HVAC, lighting, and security.",
      },
    ],
  },
  {
    id: "686f98a450a5c5fc27b61828",
    category: "Automation",
    projects: [
      {
        id: "686f98a450a5c5fc27b61829",
        name: "Automated Lighting Control Project",
        images: [
          "solarRural",
          "powerPost",
          "gridScale",
          "electricalInstallation",
        ],
        description:
          "Implementation of automated lighting controls in a commercial office block for energy savings.",
      },
    ],
  },
  {
    id: "686f98cb50a5c5fc27b6182c",
    category: "Automation",
    projects: [
      {
        id: "686f98cb50a5c5fc27b6182d",
        name: "Remote Monitoring for Water Treatment Plant",
        images: [
          "electricalInstallation3",
          "expansionProject",
          "gridScale",
          "electricalInstallation",
        ],
        description:
          "Deployment of remote monitoring and automation for a municipal water treatment facility.",
      },
    ],
  },
  {
    id: "686f98ec50a5c5fc27b61830",
    category: "Automation",
    projects: [
      {
        id: "686f98ec50a5c5fc27b61831",
        name: "Smart Warehouse Automation",
        images: [
          "solarEnergy",
          "expansionProject",
          "solarPanelImage",
          "electricalInstallation",
        ],
        description:
          "Installation of smart automation solutions for inventory and logistics management in a warehouse.",
      },
    ],
  },
  {
    id: "686f991a50a5c5fc27b61834",
    category: "CCTV",
    projects: [
      {
        id: "686f991a50a5c5fc27b61835",
        name: "City Mall CCTV Surveillance System",
        images: [
          "solarPower",
          "gridScale",
          "solarPanelImage",
          "industrialCommercial",
        ],
        description:
          "Design and installation of a comprehensive CCTV surveillance system for a city shopping mall.",
      },
    ],
  },
  {
    id: "686f993d50a5c5fc27b61838",
    category: "CCTV",
    projects: [
      {
        id: "686f993d50a5c5fc27b61839",
        name: "Industrial Perimeter Security Upgrade",
        images: [
          "powerPost",
          "gridScale",
          "wasteRecycle",
          "hydrogenProduction",
        ],
        description:
          "Upgrade of perimeter security with high-definition CCTV cameras for an industrial park.",
      },
    ],
  },
  {
    id: "686f996450a5c5fc27b6183c",
    category: "CCTV",
    projects: [
      {
        id: "686f996450a5c5fc27b6183d",
        name: "School Campus Video Monitoring",
        images: [
          "expansionProject",
          "solarRural",
          "wasteRecycle",
          "solarEnergy",
        ],
        description:
          "Deployment of a campus-wide video monitoring system for enhanced student safety.",
      },
    ],
  },
  {
    id: "686f998950a5c5fc27b61840",
    category: "CCTV",
    projects: [
      {
        id: "686f998950a5c5fc27b61841",
        name: "Residential Estate CCTV Integration",
        images: [
          "electricalInstallation",
          "solarRural",
          "electricalInstallation2",
          "electricalInstallation3",
        ],
        description:
          "Integration of CCTV systems across multiple residential blocks for centralized monitoring",
      },
    ],
  },
  {
    id: "686f99b550a5c5fc27b61844",
    category: "CCTV",
    projects: [
      {
        id: "686f99b550a5c5fc27b61845",
        name: "Traffic Intersection Surveillance",
        images: [
          "solarEnergy",
          "expansionProject",
          "electricalInstallation2",
          "powerPost",
        ],
        description:
          "Installation of CCTV cameras at major traffic intersections for city traffic management.",
      },
    ],
  },
  {
    id: "686f99e150a5c5fc27b61848",
    category: "Alarms",
    projects: [
      {
        id: "686f99e150a5c5fc27b61849",
        name: "Bank Intruder Alarm System",
        images: [
          "electricalInstallation",
          "solarPower",
          "solarRural",
          "powerPost",
        ],
        description:
          "Installation of advanced intruder alarm systems for a national bank branch network.",
      },
      {
        id: "686f9a0350a5c5fc27b6184d",
        name: "Fire Alarm Upgrade for Office Tower",
        images: ["powerPost", "solarPower", "wasteRecycle", "gridScale"],
        description:
          "Upgrade and commissioning of fire alarm systems in a high-rise office tower.",
      },
    ],
  },
  {
    id: "686f9a2d50a5c5fc27b61850",
    category: "Alarms",
    projects: [
      {
        id: "686f9a2d50a5c5fc27b61851",
        name: "Warehouse Burglar Alarm Installation",
        images: [
          "electricalInstallation3",
          "expansionProject",
          "wasteRecycle",
          "industrialCommercial",
        ],
        description:
          "Installation of burglar alarm systems for a logistics warehouse facility.",
      },
    ],
  },
  {
    id: "686f9a5850a5c5fc27b61854",
    category: "Alarms",
    projects: [
      {
        id: "686f9a5850a5c5fc27b61855",
        name: "Smart Home Alarm Integration",
        images: [
          "gridScale",
          "solarRural",
          "solarResources",
          "solarPanelImage",
        ],
        description:
          "Integration of smart alarm systems with home automation for enhanced residential security.",
      },
      {
        id: "686f9a8550a5c5fc27b61859",
        name: "School Emergency Alert System",
        images: [
          "electricalInstallation2",
          "electricalInstallation3",
          "electricalInstallation",
          "expansionProject",
        ],
        description:
          "Deployment of an emergency alert and alarm system for a large school campus.",
      },
    ],
  },
  {
    id: "686f9aad50a5c5fc27b6185c",
    category: "Alarms",
    projects: [
      {
        id: "686f9aad50a5c5fc27b6185d",
        name: "School Emergency Alert System",
        images: [
          "electricalInstallation2",
          "electricalInstallation3",
          "electricalInstallation",
          "expansionProject",
        ],
        description:
          "Deployment of an emergency alert and alarm system for a large school campus.",
      },
    ],
  },
];

export const projects: Projects = [
  {
    id: "686f8a913673b0db0950398b",
    category: "Electrical",
    name: "Commercial Office Wiring Upgrade",
    images: [
      "expansionProject",
      "gridScale",
      "solarRural",
      "electricalInstallation",
    ],
    description:
      "Complete rewiring and electrical system upgrade for a multi-story commercial office building, ensuring compliance with modern safety standards.",
  },
  {
    id: "686f8c333673b0db0950398d",
    category: "Electrical",
    name: "Residential Smart Home Installation",
    images: [
      "solarPower",
      "electricalInstallation3",
      "electricalInstallation",
      "electricalInstallation2",
    ],
    description:
      "Installation of smart electrical systems, including automated lighting and energy-efficient wiring in a luxury residential estate.",
  },
  {
    id: "686f955050a5c5fc27b617e2",
    category: "Electrical",
    name: "Industrial Panel Board Replacement",
    images: [
      "electricalInstallation3",
      "electricalInstallation",
      "gridScale",
      "electricalInstallation2",
    ],
    description:
      "Replacement and commissioning of outdated industrial panel boards to improve reliability and safety in a manufacturing facility.",
  },
  {
    id: "686f95f450a5c5fc27b617ec",
    category: "Electrical",
    name: "Hospital Emergency Power System",
    images: [
      "electricalInstallation2",
      "solarEnergy",
      "solarRural",
      "expansionProject",
    ],
    description:
      "Design and installation of a backup power system for critical care units in a regional hospital.",
  },
  {
    id: "686f962750a5c5fc27b617f0",
    category: "Electrical",
    name: "School Electrical Renovation",
    images: [
      "electricalInstallation3",
      "gridScale",
      "solarRural",
      "solarRural",
    ],
    description:
      "Comprehensive electrical renovation for a public school, including new lighting, outlets, and surge protection.",
  },
  {
    id: "686f967650a5c5fc27b617f4",
    category: "Solar",
    name: "Commercial Rooftop Solar PV System",
    images: [
      "hydrogenProduction",
      "solarPanelImage",
      "solarEnergy",
      "solarPower",
    ],
    description:
      "Installation of a high-capacity rooftop solar photovoltaic system for a shopping mall.",
  },
  {
    id: "686f969c50a5c5fc27b617f8",
    category: "Solar",
    name: "Residential Solar Water Heating",
    images: ["gridScale", "solarResources", "hydrogenProduction", "solarPower"],
    description:
      "Integration of solar water heating panels in a residential housing project.",
  },
  {
    id: "686f96c250a5c5fc27b617fc",
    category: "Solar",
    name: "Solar-Powered Irrigation System",
    images: ["solarPower", "expansionProject", "powerPost", "wasteRecycle"],
    description:
      "Design and implementation of a solar-powered irrigation system for an agricultural farm.",
  },
  {
    id: "686f96e750a5c5fc27b61800",
    category: "Solar",
    name: "Grid-Tied Solar Power Plant",
    images: [
      "hydrogenProduction",
      "expansionProject",
      "electricalInstallation2",
      "wasteRecycle",
    ],
    description:
      "Construction and commissioning of a grid-tied solar power plant for a municipal utility.",
  },
  {
    id: "686f974e50a5c5fc27b61808",
    category: "Generators",
    name: "Hospital Standby Generator Installation",
    images: [
      "hydrogenProduction",
      "industrialCommercial",
      "solarPanelImage",
      "wasteRecycle",
    ],
    description:
      "Installation of high-capacity standby generators to ensure uninterrupted power supply for a hospital.",
  },
  {
    id: "686f97a450a5c5fc27b6180c",
    category: "Generators",
    name: "Industrial Diesel Generator Upgrade",
    images: ["expansionProject", "solarRural", "solarPanelImage", "powerPost"],
    description:
      "Upgrade and maintenance of diesel generators for a large-scale manufacturing plant.",
  },
  {
    id: "686f97e950a5c5fc27b61814",
    category: "Generators",
    name: "Commercial Generator Synchronization",
    images: [
      "hydrogenProduction",
      "solarEnergy",
      "electricalInstallation2",
      "electricalInstallation",
    ],
    description:
      "Synchronization of multiple generators for seamless power transfer in a commercial complex.",
  },
  {
    id: "686f981350a5c5fc27b61818",
    category: "Generators",
    name: "Data Center Backup Power Solution",
    images: [
      "electricalInstallation3",
      "electricalInstallation",
      "electricalInstallation2",
      "electricalInstallation3",
    ],
    description:
      "Design and installation of a backup generator system for a mission-critical data center.",
  },
  {
    id: "686f983350a5c5fc27b6181c",
    category: "Generators",
    name: "Residential Estate Generator Supply",
    images: [
      "expansionProject",
      "solarResources",
      "electricalInstallation2",
      "hydrogenProduction",
    ],
    description:
      "Supply and installation of backup generators for a gated residential estate.",
  },
  {
    id: "686f985b50a5c5fc27b61820",
    category: "Automation",
    name: "Factory Process Automation Upgrade",
    images: [
      "wasteRecycle",
      "powerPost",
      "industrialCommercial",
      "hydrogenProduction",
    ],
    description:
      "Upgrade of factory automation systems to improve production efficiency and reduce downtime.",
  },
  {
    id: "686f987d50a5c5fc27b61824",
    category: "Automation",
    name: "Building Management System Integration",
    images: ["gridScale", "powerPost", "expansionProject", "wasteRecycle"],
    description:
      "Integration of a centralized building management system for automated control of HVAC, lighting, and security.",
  },
  {
    id: "686f98a450a5c5fc27b61828",
    category: "Automation",
    name: "Automated Lighting Control",
    images: ["solarRural", "solarEnergy", "expansionProject", "gridScale"],
    description:
      "Design and installation of automated lighting control for a large-scale commercial project.",
  },
];

export const projectImages = {
  elecJobsConstruction:
    "/images/projects-images/Electrical-engineering-jobs-in-the-construction-industry.jpg",
  electricalInstallation: "/images/projects-images/electrical-installation.jpg",
  electricalInstallation2:
    "/images/projects-images/electrical-installation-2.jpg",
  electricalInstallation3:
    "/images/projects-images/electrical-installation-3.jpg",
  solarEnergy: "/images/projects-images/solar-energy.jpg",
  solarPanelImage: "/images/projects-images/solar-panel-image.jpg",
  solarPower: "/images/projects-images/solar-power.jpg",
  solarResources: "/images/projects-images/solar-resources.jpg",
  solarRural: "/images/projects-images/solar-rural.jpg",
  gridScale: "/images/projects-images/grid-scale.jpg",
  expansionProject: "/images/projects-images/expansion-project.jpg",
  hydrogenProduction: "/images/projects-images/hydrogen-production.jpg",
  industrialCommercial:
    "/images/projects-images/industrial-comercial-residential-services.jpg",
  powerPost: "/images/projects-images/power-post.jpg",
  wasteRecycle: "/images/projects-images/waste-recycle.jpg",
};

export const certificateImages = [
  "/images/certifications/Change-of-particulars.png",
  "/images/certifications/Participating-license.png",
  "/images/certifications/Registration-NCA.png",
];

export const aboutIntro = {
  aboutOverview1: {
    image: projectImages.elecJobsConstruction,
    title: "With over 15 years of experience",
    description:
      "Powerdeed is your trusted engineering partner, delivering reliable, high-quality electrical and solar solutions with the latest technologies and a team of certified professionals. We blend deep technical expertise with a customer-centric approach—ensuring every system we design, install, and maintain meets the highest standards of safety, efficiency, and performance.",
    flipped: false,
  },
  aboutOverview2: {
    image: projectImages.elecJobsConstruction,
    title: "Our Mission & Vision",
    description:
      "We’re committed to empowering Kenya’s growth through sustainable, innovative engineering. Our mission is to uphold excellence, integrity, and professionalism in every project—leveraging cutting-edge renewable energy and smart electrical systems to build tomorrow’s infrastructure today.",
    flipped: true,
  },
};

export const projectCategories = {
  "Electrical Installation": "ELECTRICAL",
  "Solar Installation": "SOLAR",
  Generators: "GENERATORS",
  Automation: "AUTOMATION",
  CCTV: "CCTV",
  Alarms: "ALARMS",
};

export const aboutUs = {
  overview: {
    title: "Company Overview",
    description: [
      {
        id: "b805a61f-2527-477e-8c72-1b8256784929",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:05.776Z",
        data: {
          text: "Welcome to Powerdeed Engineering Services, your trusted partner in electrical engineering and renewable energy solutions. Established in 2014, Powerdeed has grown from humble beginnings in Nairobi to a reputable force in Nyeri, Kenya, where we now proudly serve individuals, businesses, and institutions across commercial, residential, and industrial sectors.",
        },
      },
      {
        id: "9ccaac1f-9470-478d-b525-d09c54e53299",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:10.144Z",
        data: {
          text: "At the heart of Powerdeed is a commitment to innovation, quality, sustainability, and integrity. From custom electrical installations to cutting-edge solar energy systems, our solutions are designed to be reliable, efficient, and environmentally responsible.",
        },
      },
      {
        id: "28cd952a-1d50-4983-9c5f-568f600c3f6a",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:20.063Z",
        data: {
          text: "Backed by a skilled team of engineers and technicians, and certified by both the Energy and Petroleum Regulatory Authority (EPRA) and the National Construction Authority (NCA), we consistently meet the highest standards of safety and performance.",
        },
      },
      {
        id: "9c9ba01f-6dee-462d-861c-14f980f77c65",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:32.575Z",
        data: {
          text: "Whether you’re upgrading your home’s wiring, powering your business with solar, or securing your premises with alarm systems, Powerdeed offers turnkey solutions, from design to installation and maintenance, tailored to your unique needs.",
        },
      },
      {
        id: "06dde98b-4007-4a3b-b5d9-a80c7e4aa7bd",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:40.166Z",
        data: {
          text: "Join us as we light the way toward a smarter, greener future, one project at a time.\nPowerdeed: Powering Progress, Empowering Communities.",
        },
      },
    ],
  },
  mission: {
    title: "Mission",
    description: [
      {
        id: "b805a61f-2527-477e-8c72-1b8256784929",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:05.776Z",
        data: {
          text: "To provide sustainable, safe, and innovative energy and security solutions that empower our clients and communities.",
        },
      },
    ],
  },
  vision: {
    title: "Vision",
    description: [
      {
        id: "b805a61f-2527-477e-8c72-1b8256784929",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:05.776Z",
        data: {
          text: "To be the most reliable and forward-thinking engineering service provider in Africa, recognized for excellence, safety, and environmental responsibility.",
        },
      },
    ],
  },
  whyChoose: {
    title: "Why Choose Powerdeed?",
    description: [
      {
        id: "b805a61f-2527-477e-8c72-1b8256784929",
        type: "paragraph",
        createdAt: "2026-01-22T13:06:05.776Z",
        data: {
          text: "We combine experience, professionalism, and a client-first approach to deliver tailored solutions that meet global standards. Our skilled team, compliance with safety regulations, and use of quality materials ensure long-lasting results. Powerdeed is more than a service provider—we’re your reliable partner from consultation to completion.",
        },
      },
    ],
  },
};

export const uniqueFeatures = {
  title: "Unique Features & benefits",
  description: {
    benefit1: {
      benefit: "Turnkey Solutions",
      color1: "#0a1f44",
      color2: "#0043b9",
    },
    benefit2: {
      benefit: "Customized Approach",
      color1: "#ffd600",
      color2: "#ffeb86",
    },
    benefit3: {
      benefit: "Certified Expertise",
      color1: "#ff0000",
      color2: "#ff3636",
    },
    benefit4: {
      benefit: "Sustainable Focus",
      color1: "#00c896",
      color2: "#61ffd7",
    },
    benefit5: {
      benefit: "24/7 Support",
      color1: "#454545",
      color2: "#838383",
    },
  },
  width: "100%",
};

export const blogs: Blogs = [
  {
    id: 1,
    topic: "Electrical",
    blogDoc: {
      metadata: {
        docTitle: "How Backup Power Can Save Your Business During Blackouts",
        description:
          "Discover the importance of reliable backup power systems for businesses and how electrical installations can ensure uninterrupted operations during unexpected outages.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "How Backup Power Can Save Your Business During Blackouts",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 2,
    topic: "Solar",
    blogDoc: {
      metadata: {
        docTitle:
          "How the War in Israel and Iraq Is Affecting the Energy Sector",
        description:
          "An in-depth look at how global conflicts impact solar energy adoption and the broader renewable energy market.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "How the War in Israel and Iraq Is Affecting the Energy Sector",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 3,
    topic: "Generators",
    blogDoc: {
      metadata: {
        docTitle: "Choosing the Right Generator for Your Facility",
        description:
          "A comprehensive guide to selecting generators that match your power needs and budget.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Choosing the Right Generator for Your Facility",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 4,
    topic: "Automation",
    blogDoc: {
      metadata: {
        docTitle: "Smart Automation: The Future of Industrial Efficiency",
        description:
          "How automation is revolutionizing industrial processes and boosting productivity.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Smart Automation: The Future of Industrial Efficiency",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 5,
    topic: "CCTV",
    blogDoc: {
      metadata: {
        docTitle: "Top 5 CCTV Trends for 2024",
        description:
          "Stay ahead with the latest trends in CCTV technology for enhanced security and monitoring.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Top 5 CCTV Trends for 2024",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 6,
    topic: "Alarms",
    blogDoc: {
      metadata: {
        docTitle: "Protecting Your Home and Business",
        description:
          "An overview of modern alarm systems and how they deter threats and provide peace of mind.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Protecting Your Home and Business",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 7,
    topic: "Electrical",
    blogDoc: {
      metadata: {
        docTitle: "Modern Wiring Techniques for Safer Homes",
        description:
          "Explore the latest advancements in electrical wiring that enhance safety and efficiency in residential installations.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Modern Wiring Techniques for Safer Homes",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 8,
    topic: "Solar",
    blogDoc: {
      metadata: {
        docTitle:
          "How the War in Israel and Iraq Is Affecting the Energy Sector",
        description:
          "An in-depth look at how global conflicts impact solar energy adoption and the broader renewable energy market.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "How the War in Israel and Iraq Is Affecting the Energy Sector",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 9,
    topic: "Generators",
    blogDoc: {
      metadata: {
        docTitle: "Generator Maintenance: Tips for Longevity",
        description:
          "Essential maintenance practices to keep your generators running efficiently and reliably.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Generator Maintenance: Tips for Longevity",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
  {
    id: 10,
    topic: "Automation",
    blogDoc: {
      metadata: {
        docTitle: "Integrating IoT in Building Automation",
        description:
          "The benefits and challenges of implementing IoT solutions in modern building automation systems.",
        author: "Unknown",
        createdAt: "2026-01-24T01:23:46.613Z",
      },
      version: "1.0.0",
      blocks: [
        {
          id: "baf3c481-219f-4c00-a48e-49c788af4be7",
          type: "heading",
          createdAt: "2026-01-24T01:22:03.761Z",
          data: {
            text: "Integrating IoT in Building Automation",
            level: 1,
          },
        },
        {
          id: "16e969b9-ace0-42a7-8516-e2e3dce2b792",
          type: "subheading",
          createdAt: "2026-01-24T01:23:10.349Z",
          data: {
            text: "Subheading",
          },
        },
        {
          id: "2dc04bfb-22c7-4aa8-af69-93554dc4b6a8",
          type: "paragraph",
          createdAt: "2026-01-24T01:22:34.471Z",
          data: {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        },
      ],
    },
  },
];

export const contacts = {
  location: "Wakiawa House, Nyeri Town, Kenya",
  phone: "+254 722 316 721",
  email: "powerdeedtechnologies@gmail.com",
  "working-hours": "Mon-Fri: 8:00am - 5:00pm",
};
