import { use } from "react";

import AboutView from "./components/AboutView";
import AboutCertificationsProvider from "./context/AboutCertificationsProvider";
import AboutOverviewProvider from "./context/AboutOverviewProvider";

export default function About({
  params,
}: {
  params: Promise<{ aboutPage: "overview" | "structure" | "certificates" }>;
}) {
  const { aboutPage } = use(params);

  return (
    <AboutOverviewProvider>
      <AboutCertificationsProvider>
        <AboutView aboutPage={aboutPage} />
      </AboutCertificationsProvider>
    </AboutOverviewProvider>
  );
}
