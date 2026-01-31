import Image from "next/image";

export default function BlogTopicSection() {
  return (
    <div className="flex flex-col gap-2.5 md:gap-5">
      <div className="relative w-full h-100">
        <Image
          src="/images/electrical.jpeg"
          alt=""
          fill
          objectFit="cover"
          className="w-full h-full"
        />

        <div className="absolute top-1/2 left-10 text-(--primary-yellow) text-[40px] font-bold">
          Electrical
          <div className="text-[16px] lg:text-[20px] font-normal text-(--primary-blue)">
            Explore latest trends in electrical construction
          </div>
        </div>
      </div>

      <div className="blog-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-5 px-2.5 md:px-5">
        <div className="card h-70">
          <div className="relative w-full h-full">
            <Image
              src="/images/what-do-electrical-engineers-do.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="card h-70">
          <div className="relative w-full h-full">
            <Image
              src="/images/what-do-electrical-engineers-do.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="card h-70">
          <div className="relative w-full h-full">
            <Image
              src="/images/what-do-electrical-engineers-do.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="card h-70">
          <div className="relative w-full h-full">
            <Image
              src="/images/what-do-electrical-engineers-do.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
        <div className="card h-70">
          <div className="relative w-full h-full">
            <Image
              src="/images/what-do-electrical-engineers-do.jpg"
              alt=""
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
