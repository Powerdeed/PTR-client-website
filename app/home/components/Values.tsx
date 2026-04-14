import CoreValues from "@/app/about/[aboutPage]/components/about_overview/CoreValues";
import SubTitle from "./SubTitle";
import { aboutUs } from "@/app/about/[aboutPage]/services/about";
import { isStringMatrix } from "@/app/about/[aboutPage]/utils/typeCheckers";

export default function Values() {
  return aboutUs.map(
    (about, idx) =>
      isStringMatrix(about.description) && (
        <div key={idx}>
          <SubTitle subTitle="Our Core Values" />
          <CoreValues about={about} />
        </div>
      ),
  );
}
