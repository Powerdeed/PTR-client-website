import About from "@/components/features/home/About";
import Header from "@/components/features/home/Header";
import QuickNavs from "@/components/features/home/QuickNavs";
import Testimonials from "@/components/features/home/Testimonials";
import TopProjects from "@/components/features/home/TopProjects";
import CoreValues from "@/components/layout/CoreValues";

export default function page() {
  return (
    <>
      <Header />
      <QuickNavs />

      <div className="flex flex-col gap-12.5 w-full p-[0_10px] lg:p-[0_10%] mt-12.5">
        <About />
        <CoreValues />
        <TopProjects />
        <Testimonials />
      </div>
    </>
  );
}
