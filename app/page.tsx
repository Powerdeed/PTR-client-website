import About from "@/components/features/home/About";
import CoreValues from "@/components/features/home/CoreValues";
import Header from "@/components/features/home/Header";
import Testimonials from "@/components/features/home/Testimonials";
import TopProjects from "@/components/features/home/TopProjects";

export default function page() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-12.5 w-full p-[0_10px] lg:p-[0_10%] mt-12.5">
        <About />
        <CoreValues />
        <TopProjects />
        <Testimonials />
      </div>
    </>
  );
}
