"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image.js";

const projectImages = {
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

const allProjectsArray = [
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

export default function TopProjects() {
  const [active, setActive] = useState("Electrical");
  const [slideIn, setSlideIn] = useState(false);
  const projectCards = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const cardsSection = projectCards.current;
    function animate() {
      if (cardsSection) {
        cardsSection.style.transition =
          "transform 800ms cubic-bezier(0.4, 0, 0.2, 1), gap 800ms cubic-bezier(0.4, 0, 0.2, 1)";
        cardsSection.style.gap = "20px";
      }
    }

    function imageSliderAnimation() {
      if (slideIn && cardsSection) {
        cardsSection.style.transition = "none";
        cardsSection.style.gap = "150px";
        void cardsSection.offsetWidth;
        animate();
        setSlideIn(false);
      }
    }

    imageSliderAnimation();

    function updateSectionRectTop() {
      if (!cardsSection) return;
      const rect = cardsSection.getBoundingClientRect();
      const halfway = window.innerHeight / 2;
      if (rect.top <= halfway && rect.bottom >= 0) {
        animate();
      }
    }

    window.addEventListener("scroll", updateSectionRectTop);

    return () => {
      window.removeEventListener("scroll", updateSectionRectTop);
    };
  }, [slideIn, setSlideIn]);

  const uniqueCategories = [
    ...new Set(allProjectsArray.map((project) => project.category)),
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-0.5 lg:p-0">
      <h2 className="text-center mb-7.5">Our Top Projects</h2>
      {isMobile ? (
        <TopProjectsPhoneView
          uniqueCategories={uniqueCategories}
          active={active}
          setActive={setActive}
          setSlideIn={setSlideIn}
        />
      ) : (
        <ul className="list-none flex gap-10 justify-center w-full h-6 m-[20px_0] bg-[linear-gradient(to_right,var(--white)_10%,var(--primary-blue)_20%,var(--primary-blue)_80%,var(--white)_90%)] items-center">
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className={`${
                active === category ? "underline" : ""
              } cursor-pointer text-(--primary-yellow) hover:underline`}
              onClick={() => {
                setActive(category);
                setSlideIn(true);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      <div
        ref={projectCards}
        className="mx-auto w-full lg:w-fit grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-37.5 justify-center"
      >
        {allProjectsArray
          .filter((project) => project.category === active)
          .slice(0, 4)
          .map((project, idx) => (
            <div
              key={project.id || project.projects[0].name || idx}
              className="group bg-(--primary-blue) relative w-full lg:w-100 h-62.5 rounded-[10px] cursor-pointer"
            >
              <Image
                src={`${
                  projectImages[
                    project.projects[0].images[0] as keyof typeof projectImages
                  ]
                }`}
                alt=""
                fill
                sizes="(max-width: 1024px) 100%, 400px"
                className="w-full h-full object-cover rounded-[10px] group-hover:opacity-50 group-hover:duration-500"
              />
              <p className="group-hover:opacity-100 group-hover:-translate-y-17.5 group-hover:duration-500 text-white bottom-0 absolute opacity-0 p-[0_10px]">
                {project.projects[0].name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

function TopProjectsPhoneView({
  uniqueCategories,
  active,
  setActive,
  setSlideIn,
}: {
  uniqueCategories: string[];
  active: string;
  setActive: (category: string) => void;
  setSlideIn: (slideIn: boolean) => void;
}) {
  return (
    <div className="mb-5">
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex grid-cols-[repeat(5,1fr)] justify-center gap-2.5">
          {uniqueCategories.map((category) => (
            <div
              className={`w-7.5 h-7.5 rounded-[10px] cursor-pointer ${
                active === category
                  ? "bg-(--primary-blue)"
                  : "bg-(--secondary-blue)"
              }`}
              key={category}
              onClick={() => {
                setActive(category);
                setSlideIn(true);
              }}
            ></div>
          ))}
        </div>
        <div className="w-full flex grid-cols-[repeat(5,1fr)] justify-center gap-7.5">
          {uniqueCategories.map((category) => (
            <div
              className={`w-2.5 h-1.25 bg-(--primary-blue) opacity-0 ${
                active === category ? "opacity-100" : ""
              }`}
              key={category}
            ></div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <div className="grid justify-center rounded-[10px] w-57.5 h-8 bg-(--primary-blue) text-(--primary-yellow) items-center">
            {active}
          </div>
        </div>
      </div>
    </div>
  );
}
