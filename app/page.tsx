import About from "@/components/features/home/About";
import Header from "@/components/features/home/Header";

export default function page() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-12.5 w-full p-[0_10px] lg:p-[0_10%] mt-12.5">
        <About />
      </div>
    </>
  );
}
