// components
import ReachUsForm from "@/components/layout/ReachUsForm";
import TopProjects from "./TopProjects";
import TopBlogs from "./TopBlogs";

type Option = "reach us" | "projects" | "blogs";

export default function SidePanel({ options }: { options: Option[] }) {
  return (
    <div className="w-full md:w-[90%] lg:min-w-60 lg:max-w-90 text-[12px] font-medium lg:sticky top-20 lg:top-22.5 rounded-[10px] bg-white">
      {options.map((option, idx) => (
        <div key={idx}>
          <div>
            {option === "reach us" && <ReachUsForm />}
            {option === "projects" && <TopProjects />}
            {option === "blogs" && <TopBlogs />}
          </div>

          {idx < options.length - 1 && (
            <hr className="my-2 text-(--terciary-grey)" />
          )}
        </div>
      ))}
    </div>
  );
}
