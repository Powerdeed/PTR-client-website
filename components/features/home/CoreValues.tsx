import SubTitle from "./SubTitle";

const coreValues = {
  values: {
    value1: {
      name: "Integrity",
      description: "We act honestly and ethically in all we do.",
      color: "#0a1f44",
    },
    value2: {
      name: "Excellence",
      description: "We strive for the highest standards and results.",
      color: "#0043b9",
    },
    value3: {
      name: "Innovation",
      description: "We embrace creativity and new ideas.",
      color: "#ffd600",
    },
    value4: {
      name: "Customer Focus",
      description: "We prioritize our clients’ needs and satisfaction.",
      color: "#ff0000",
    },
    value5: {
      name: "Teamwork",
      description: "We collaborate and support each other.",
      color: "#00c896",
    },
    value6: {
      name: "Safety",
      description: "We ensure a safe environment for all.",
      color: "#61ffd7",
    },
  },
};

export default function CoreValues() {
  return (
    <div>
      <SubTitle subTitle="Our Core Values" />

      <div className="flex flex-wrap justify-center gap-[3%]">
        {Object.entries(coreValues.values).map(([key, value]) => (
          <div key={key} className="h-25 w-37.5 mb-2.5">
            <div
              className="group items-center h-12.5 rounded-[10px] overflow-hidden transition-[height_300ms] cursor-pointer pt-3 hover:h-full hover:transition-[height_300ms]"
              style={{ boxShadow: `1px 1px 15px ${value.color}` }}
            >
              <div
                className="text-center w-full font-bold"
                style={{ color: `${value.color}` }}
              >
                {value.name}
              </div>
              <p className="mt-2.5 p-1.25 text-[12px] font-semibold text-center text-(--primary-grey) hidden pb-2.5 group-hover:block">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
