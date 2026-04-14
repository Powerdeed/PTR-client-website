import About from "./About";
import Header from "./Header";
import QuickNavs from "./QuickNavs";
import TopProjects from "./TopProjects";
import Testimonials from "./Testimonials";
import Values from "./Values";

export default function HomeView() {
  return (
    <div>
      <Header />
      <QuickNavs />

      <div className="flex flex-col gap-12.5 w-full p-[0_10px] lg:p-[0_10%] mt-12.5">
        <About />
        <Values />
        <TopProjects />
        <Testimonials />
      </div>
    </div>
  );
}
