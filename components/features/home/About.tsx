import Image from "next/image";

const aboutIntro = [
  {
    title: "With over 15 years of experience",
    description:
      "Powerdeed is your trusted engineering partner, delivering reliable, high-quality electrical and solar solutions with the latest technologies and a team of certified professionals. We blend deep technical expertise with a customer-centric approach—ensuring every system we design, install, and maintain meets the highest standards of safety, efficiency, and performance.",
    flipped: false,
  },
  {
    title: "Our Mission & Vision",
    description:
      "We’re committed to empowering Kenya’s growth through sustainable, innovative engineering. Our mission is to uphold excellence, integrity, and professionalism in every project—leveraging cutting-edge renewable energy and smart electrical systems to build tomorrow’s infrastructure today.",
    flipped: true,
  },
];

export default function About() {
  return (
    <div className="w-full flex flex-col gap-7.5">
      {Object.entries(aboutIntro).map(([key, value]) => (
        <div
          key={key}
          className={`w-full flex flex-col mb-7.5 lg:grid grid-cols-2 items-center gap-5 ${
            value.flipped ? "rotate-y-180" : ""
          }`}
        >
          <div
            className={`relative w-full h-75 ${
              value.flipped ? "rotate-y-180" : ""
            }`}
          >
            <Image
              src="/images/projects-images/Electrical-engineering-jobs-in-the-construction-industry.jpg"
              alt="Milestone Electrical and Solar Solutions"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex flex-col items-center gap-2.5 ${
              value.flipped ? "rotate-y-180" : ""
            }`}
          >
            <h3 className="text-justify text-(--primary-blue) font-bold">
              {value.title}
            </h3>
            <p className="text-justify">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
