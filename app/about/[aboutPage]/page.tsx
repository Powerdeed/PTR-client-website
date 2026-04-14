import { use } from "react";

import AboutView from "./components/AboutView";
import AboutCertificationsProvider from "./context/AboutCertificationsProvider";

export default function About({
  params,
}: {
  params: Promise<{ aboutPage: "overview" | "structure" | "certificates" }>;
}) {
  const { aboutPage } = use(params);

  return (
    <AboutCertificationsProvider>
      <AboutView aboutPage={aboutPage} />
    </AboutCertificationsProvider>
  );
}
