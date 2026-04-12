// components
import ReachUsForm from "@/app/contact/components/ReachUsForm";
import TopProjects from "../../app/projects/components/TopProjects";
import TopArticles from "../../app/articles/[articleTopic]/components/TopArticles";
import ContactProvider from "@/app/contact/context/ContactProvider";

type Option = "reach us" | "projects" | "blogs";

export default function SidePanel({ options }: { options: Option[] }) {
  return (
    <ContactProvider>
      <div className="w-full md:w-[90%] lg:min-w-60 lg:max-w-90 text-[12px] font-medium lg:sticky top-20 lg:top-22.5 rounded-[10px]">
        {options.map((option, idx) => (
          <div key={idx}>
            <div>
              {option === "reach us" && <ReachUsForm />}
              {option === "projects" && <TopProjects />}
              {option === "blogs" && <TopArticles />}
            </div>

            {idx < options.length - 1 && (
              <hr className="my-2 text-(--terciary-grey)" />
            )}
          </div>
        ))}
      </div>
    </ContactProvider>
  );
}
