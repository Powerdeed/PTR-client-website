import Image from "next/image";

export default function AboutOverview({
  height,
  title,
  description,
  icon,
}: {
  height: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="grid gap-1.25 mb-10">
      <h3 className="w-full inline-flex relative">
        {title}
        <div className="absolute w-5 h-5 right-0">
          <Image src={icon} alt="" fill objectFit="contain" />
        </div>
      </h3>
      <div className="bg-[linear-gradient(to_right,var(--secondary-blue)_70%,var(--primary-blue)_90%)] h-1.25"></div>
      <div className="text-justify" style={{ height: height }}>
        {description}
      </div>
    </div>
  );
}
