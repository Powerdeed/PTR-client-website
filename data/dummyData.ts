import {
  AboutIntro,
  AboutUs,
  ArticleContent,
  ArticleMeta,
  ArticleTopics,
  Comment,
  Contacts,
  CoreValue,
  FormFillingOptions,
  Projects,
  Service,
  Testimonial,
  UniqueFeatures,
} from "@/lib/types/types";

export const hero = {
  title: "Powering Kenya's Future: Expert Electrical & Solar Solutions",
  subtitle:
    "Delivering reliable electrical engineering and solar energy solutions across Kenya.",
  image: "/images/PES-site-image.jpg",
};

export const coreValues: CoreValue[] = [
  {
    name: "Integrity",
    description: "We act honestly and ethically in all we do.",
    color: "#0a1f44",
  },
  {
    name: "Excellence",
    description: "We strive for the highest standards and results.",
    color: "#0043b9",
  },
  {
    name: "Innovation",
    description: "We embrace creativity and new ideas.",
    color: "#ffd600",
  },
  {
    name: "Customer Focus",
    description: "We prioritize our clients’ needs and satisfaction.",
    color: "#ff0000",
  },
  {
    name: "Teamwork",
    description: "We collaborate and support each other.",
    color: "#00c896",
  },
  {
    name: "Safety",
    description: "We ensure a safe environment for all.",
    color: "#61ffd7",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "6870da6360461b0545bb47e6",
    name: "John Doe",
    position: "Acme Corp",
    industry: "CEO",
    testimonial:
      "Powerdeed exceeded our expectations with their professionalism and expertise.",
    profilePic: "profile-image",
  },
  {
    id: "6870e4f7e43b11bdb76674b5",
    name: "Jane Smith",
    position: "Resident",
    industry: "Project Manager",
    testimonial: "The team was friendly and efficient. Highly recommended!",
    profilePic: "profile-image",
  },
  {
    id: "6870e52d5f5d5c2b57831af2",
    name: "Michael Brown",
    position: "Facility Manager",
    industry: "Facility Management",
    testimonial: "Their solutions are reliable and cost-effective.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5435f5d5c2b57831af5",
    name: "Emily White",
    position: "Homeowner",
    industry: "Residential",
    testimonial: "I am very satisfied with the service provided by Powerdeed.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5545f5d5c2b57831af8",
    name: "David Green",
    position: "Business Owner",
    industry: "Commercial",
    testimonial: "Prompt response and excellent customer care.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5795f5d5c2b57831afb",
    name: "Sophia Lee",
    position: "Resident",
    industry: "Residential",
    testimonial: "They made the whole process seamless and easy.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5a55f5d5c2b57831afe",
    name: "Olivia Brown",
    position: "Property Manager",
    industry: "Olivia Corp",
    testimonial: "We will definitely work with Powerdeed again.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5b85f5d5c2b57831b01",
    name: "Daniel Kim",
    position: "Resident",
    industry: "Residential",
    testimonial: "Great value for money and top-notch service.",
    profilePic: "profile-image",
  },
  {
    id: "6870e5cb5f5d5c2b57831b04",
    name: "Grace Wilson",
    position: "Wilson Enterprises",
    industry: "CEO",
    testimonial: "Professional, reliable, and trustworthy.",
    profilePic: "profile-image",
  },
];

export const services: Service[] = [
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

export const projects: Projects = [
  {
    id: "686f8a913673b0db0950398b",
    category: "Electrical Installation",
    name: "Commercial Office Wiring Upgrade",
    images: [
      "expansionProject",
      "gridScale",
      "solarRural",
      "electricalInstallation",
    ],
    description:
      "Complete rewiring and electrical system upgrade for a multi-story commercial office building, ensuring compliance with modern safety standards.",
    status: "Completed",
    featured: true,
  },
  {
    id: "686f8c333673b0db0950398d",
    category: "Electrical Installation",
    name: "Residential Smart Home Installation",
    images: [
      "solarPower",
      "electricalInstallation3",
      "electricalInstallation",
      "electricalInstallation2",
    ],
    description:
      "Installation of smart electrical systems, including automated lighting and energy-efficient wiring in a luxury residential estate.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f955050a5c5fc27b617e2",
    category: "Electrical Installation",
    name: "Industrial Panel Board Replacement",
    images: [
      "electricalInstallation3",
      "electricalInstallation",
      "gridScale",
      "electricalInstallation2",
    ],
    description:
      "Replacement and commissioning of outdated industrial panel boards to improve reliability and safety in a manufacturing facility.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f95f450a5c5fc27b617ec",
    category: "Electrical Installation",
    name: "Hospital Emergency Power System",
    images: [
      "electricalInstallation2",
      "solarEnergy",
      "solarRural",
      "expansionProject",
    ],
    description:
      "Design and installation of a backup power system for critical care units in a regional hospital.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f962750a5c5fc27b617f0",
    category: "Electrical Installation",
    name: "School Electrical Renovation",
    images: [
      "electricalInstallation3",
      "gridScale",
      "solarRural",
      "solarRural",
    ],
    description:
      "Comprehensive electrical renovation for a public school, including new lighting, outlets, and surge protection.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f967650a5c5fc27b617f4",
    category: "Solar Installation",
    name: "Commercial Rooftop Solar PV System",
    images: [
      "hydrogenProduction",
      "solarPanelImage",
      "solarEnergy",
      "solarPower",
    ],
    description:
      "Installation of a high-capacity rooftop solar photovoltaic system for a shopping mall.",
    status: "Completed",
    featured: true,
  },
  {
    id: "686f969c50a5c5fc27b617f8",
    category: "Solar Installation",
    name: "Residential Solar Water Heating",
    images: ["gridScale", "solarResources", "hydrogenProduction", "solarPower"],
    description:
      "Integration of solar water heating panels in a residential housing project.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f96c250a5c5fc27b617fc",
    category: "Solar Installation",
    name: "Solar-Powered Irrigation System",
    images: ["solarPower", "expansionProject", "powerPost", "wasteRecycle"],
    description:
      "Design and implementation of a solar-powered irrigation system for an agricultural farm.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f96e750a5c5fc27b61800",
    category: "Solar Installation",
    name: "Grid-Tied Solar Power Plant",
    images: [
      "hydrogenProduction",
      "expansionProject",
      "electricalInstallation2",
      "wasteRecycle",
    ],
    description:
      "Construction and commissioning of a grid-tied solar power plant for a municipal utility.",
    status: "Completed",
    featured: false,
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
    status: "Completed",
    featured: true,
  },
  {
    id: "686f97a450a5c5fc27b6180c",
    category: "Generators",
    name: "Industrial Diesel Generator Upgrade",
    images: ["expansionProject", "solarRural", "solarPanelImage", "powerPost"],
    description:
      "Upgrade and maintenance of diesel generators for a large-scale manufacturing plant.",
    status: "Completed",
    featured: false,
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
    status: "Completed",
    featured: false,
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
    status: "Completed",
    featured: false,
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
    status: "Completed",
    featured: false,
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
    status: "Completed",
    featured: true,
  },
  {
    id: "686f987d50a5c5fc27b61824",
    category: "Automation",
    name: "Building Management System Integration",
    images: ["gridScale", "powerPost", "expansionProject", "wasteRecycle"],
    description:
      "Integration of a centralized building management system for automated control of HVAC, lighting, and security.",
    status: "Completed",
    featured: false,
  },
  {
    id: "686f98a450a5c5fc27b61828",
    category: "Automation",
    name: "Automated Lighting Control",
    images: ["solarRural", "solarEnergy", "expansionProject", "gridScale"],
    description:
      "Design and installation of automated lighting control for a large-scale commercial project.",
    status: "Completed",
    featured: false,
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

export const aboutIntro: AboutIntro[] = [
  {
    title: "With over 15 years of experience",
    description:
      "Powerdeed is your trusted engineering partner, delivering reliable, high-quality electrical and solar solutions with the latest technologies and a team of certified professionals. We blend deep technical expertise with a customer-centric approach—ensuring every system we design, install, and maintain meets the highest standards of safety, efficiency, and performance.",
    image: projectImages.elecJobsConstruction,
    flipped: false,
  },
  {
    title: "Our Mission & Vision",
    description:
      "We’re committed to empowering Kenya’s growth through sustainable, innovative engineering. Our mission is to uphold excellence, integrity, and professionalism in every project—leveraging cutting-edge renewable energy and smart electrical systems to build tomorrow’s infrastructure today.",
    image: projectImages.elecJobsConstruction,
    flipped: true,
  },
];

export const aboutUs: AboutUs[] = [
  {
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
  {
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
  {
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
  {
    title: "Why Choose Powerdeed?",
    description: [
      "15+ years of proven industry experience",
      "Multidisciplinary team of expert engineers",
      "Commitment of sustainable practices",
      "Client-focused approach",
      "500+ successfully completed projects",
      "Complipance with safety regulations",
      "Our quality materials ensure long-lasting results",
      "reliable partner from consultation to completion",
    ],
  },
];

export const uniqueFeatures: UniqueFeatures[] = [
  {
    benefit: "Turnkey Solutions",
    color1: "#0a1f44",
    color2: "#0043b9",
  },
  {
    benefit: "Customized Approach",
    color1: "#ffd600",
    color2: "#ffeb86",
  },
  {
    benefit: "Certified Expertise",
    color1: "#ff0000",
    color2: "#ff3636",
  },
  {
    benefit: "Sustainable Focus",
    color1: "#00c896",
    color2: "#61ffd7",
  },
  {
    benefit: "24/7 Support",
    color1: "#454545",
    color2: "#838383",
  },
];

export const articleTopics: ArticleTopics = [
  {
    id: "1",
    topic: "electrical",
    description:
      "Insights into modern electrical systems, safety practices, and real-world installations that power homes, businesses, and industries.",
    image: "/images/blogTopicImages/Electrical.jpeg",
  },
  {
    id: "2",
    topic: "solar",
    description:
      "Exploring solar technologies, renewable energy trends, and practical solutions for sustainable power generation.",
    image: "/images/blogTopicImages/Solar.jpg",
  },
  {
    id: "3",
    topic: "generators",
    description:
      "Deep dives into backup power systems, generator selection, maintenance strategies, and reliability planning.",
    image: "/images/blogTopicImages/Generators.jpg",
  },
  {
    id: "4",
    topic: "automation",
    description:
      "Articles on smart systems, industrial automation, and how intelligent control is reshaping efficiency and productivity.",
    image: "/images/blogTopicImages/Automation.jpg",
  },
  {
    id: "5",
    topic: "cctv",
    description:
      "Guides and insights on surveillance systems, security design, and best practices for monitoring and protection.",
    image: "/images/blogTopicImages/CCTV.jpg",
  },
  {
    id: "6",
    topic: "alarms",
    description:
      "Understanding alarm systems, threat detection, and modern approaches to safety and early-warning technologies.",
    image: "/images/blogTopicImages/Alarms.jpg",
  },
];

export const articlesMeta: ArticleMeta[] = [
  {
    id: "1",
    topic: "electrical",
    title: "How Backup Power Can Save Your Business During Blackouts",
    description:
      "Discover the importance of reliable backup power systems for businesses and how electrical installations can ensure uninterrupted operations during unexpected outages.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["electrical", "power"],
    comments: 0,
  },
  {
    id: "2",
    topic: "solar",
    title: "How the War in Israel and Iraq Is Affecting the Energy Sector",
    description:
      "An in-depth look at how global conflicts impact solar energy adoption and the broader renewable energy market.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["energy", "power"],
    comments: 0,
  },
  {
    id: "3",
    topic: "generators",
    title: "Choosing the Right Generator for Your Facility",
    description:
      "A comprehensive guide to selecting generators that match your power needs and budget.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["generators", "power"],
    comments: 0,
  },
  {
    id: "4",
    topic: "automation",
    title: "Smart Automation: The Future of Industrial Efficiency",
    description:
      "How automation is revolutionizing industrial processes and boosting productivity.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["automation", "efficiency"],
    comments: 0,
  },
  {
    id: "5",
    topic: "cctv",
    title: "Top 5 CCTV Trends for 2024",
    description:
      "Stay ahead with the latest trends in CCTV technology for enhanced security and monitoring.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["cctv", "security"],
    comments: 0,
  },
  {
    id: "6",
    topic: "alarms",
    title: "Protecting Your Home and Business",
    description:
      "An overview of modern alarm systems and how they deter threats and provide peace of mind.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["business", "alarms"],
    comments: 0,
  },
  {
    id: "7",
    topic: "electrical",
    title: "Modern Wiring Techniques for Safer Homes",
    description:
      "Explore the latest advancements in electrical wiring that enhance safety and efficiency in residential installations.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["electrical", "safety", "efficiency"],
    comments: 0,
  },
  {
    id: "8",
    topic: "solar",
    title: "How the War in Israel and Iraq Is Affecting the Energy Sector",
    description:
      "An in-depth look at how global conflicts impact solar energy adoption and the broader renewable energy market.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["solar", "war", "energy", "renewable", "global"],
    comments: 0,
  },
  {
    id: "9",
    topic: "generators",
    title: "Generator Maintenance: Tips for Longevity",
    description:
      "Essential maintenance practices to keep your generators running efficiently and reliably.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["generators", "efficiency", "maintenance"],
    comments: 0,
  },
  {
    id: "10",
    topic: "automation",
    title: "Integrating IoT in Building Automation",
    description:
      "The benefits and challenges of implementing IoT solutions in modern building automation systems.",
    image: "",
    author: "Unknown",
    createdAt: "2026-01-24T01:23:46.613Z",
    tags: ["automation", "IoT"],
    comments: 0,
  },
];

export const articlesContent: ArticleContent[] = [
  {
    id: "1",
    articleDoc: {
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
    id: "2",
    articleDoc: {
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
    id: "3",
    articleDoc: {
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
    id: "4",
    articleDoc: {
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
    id: "5",
    articleDoc: {
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
    id: "6",
    articleDoc: {
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
    id: "7",
    articleDoc: {
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
    id: "8",
    articleDoc: {
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
    id: "9",
    articleDoc: {
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
    id: "10",
    articleDoc: {
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

export const comments: Comment[] = [
  {
    docId: "1",
    id: "1",
    comment: "Good Job",
    likes: 3,
  },
  {
    docId: "2",
    id: "1",
    comment: "Loved it",
    likes: 3,
  },
  {
    docId: "3",
    id: "2",
    comment: "Good Job",
    likes: 3,
  },
  {
    docId: "4",
    id: "2",
    comment: "I enjoed it",
    likes: 3,
  },
  {
    docId: "5",
    id: "3",
    comment: "Very informative",
    likes: 3,
  },
];

export const contacts: Contacts = {
  general: {
    location: "Wakiawa House, Nyeri Town, Kenya",
    phone: "+254 722 316 721",
    email: "powerdeedtechnologies@gmail.com",
    "working-hours": "Mon-Fri: 8:00am - 5:00pm",
  },
  socials: {
    linkedIn: {
      link: "https://www.linkedin.com/in/alfred-kuria-58199a106/?originalSubdomain=ke",
    },
    WhatsApp: {
      link: "https://wa.me/254722316721?text=Hi%2C%20I%20found%20you%20on%20the%20website",
    },
  },
};

export const formFillingOptions: FormFillingOptions = {
  projectSectorOptions: [
    "Electrical Installation",
    "Solar Power Installation",
    "Automation",
    "Alarms",
    "Generators",
  ],
  propertyTypeOptions: [
    "Residential",
    "Commercial",
    "Industrial",
    "Institutional",
  ],
  hearAboutUsOptions: [
    "Website",
    "Social Media",
    "Friend",
    "Advert",
    "Web Search",
    "Event",
    "Other",
  ],
};
