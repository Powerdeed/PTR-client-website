import { coreValues } from "@/data/dummyData";
import SubTitle from "../features/home/SubTitle";

export default function CoreValues() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-[3%]">
        <SubTitle subTitle="Our Core Values" />

        {coreValues.map((value) => (
          <div key={value.name} className="h-25 w-37.5 mb-2.5">
            <div
              className="group items-center h-12.5 rounded-[10px] overflow-hidden transition-[height_300ms] cursor-pointer pt-3 hover:h-20 hover:transition-[height_300ms]"
              style={{ boxShadow: `1px 1px 15px ${value.color}` }}
            >
              <div
                className="text-style__subheading text-center"
                style={{ color: `${value.color}` }}
              >
                {value.name}
              </div>
              <p className="hidden group-hover:block mt-1.25 p-1.25 pb-2.5 text-style__small-text text-center text-(--primary-grey)">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
