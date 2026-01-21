import SidePanel from "@/components/layout/SidePanel";

import { topProjects } from "@/services/projects";

export default function page() {
  return (
    <div>
      <SidePanel topProjects={topProjects} />
    </div>
  );
}
