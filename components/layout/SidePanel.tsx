// components
import ReachUsForm from "@/components/layout/ReachUsForm";
import TopProjects from "./TopProjects";
import TopBlogs from "./TopBlogs";

export default function SidePanel({
  options,
}: {
  options: [
    "reach us" | "projects" | "blogs",
    "reach us" | "projects" | "blogs",
  ];
}) {
  return (
    <div className="w-full md:w-[90%] lg:w-100 text-[12px] font-medium lg:sticky top-20 lg:top-22.5 rounded-[10px] bg-white">
      {options.map((option, idx) => (
        <div key={idx}>
          <div>
            {option === "reach us" && <ReachUsForm />}
            {option === "projects" && <TopProjects />}
            {option === "blogs" && <TopBlogs />}
          </div>

          {idx < options.length - 1 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  );
}
