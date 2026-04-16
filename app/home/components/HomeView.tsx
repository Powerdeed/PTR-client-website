import About from "./About";
import Header from "./Header";
import QuickNavs from "./QuickNavs";
import TopProjects from "./TopProjects";
import Testimonials from "./Testimonials";
import Values from "./Values";
import AboutOverviewProvider from "@/app/about/[aboutPage]/context/AboutOverviewProvider";

export default function HomeView() {
  return (
    <div>
      <Header />
      <QuickNavs />

      <div className="flex flex-col gap-12.5 w-full p-[0_10px] lg:p-[0_10%] mt-12.5">
        <About />

        <AboutOverviewProvider>
          <Values />
        </AboutOverviewProvider>

        <TopProjects />
        <Testimonials />
      </div>
    </div>
  );
}
