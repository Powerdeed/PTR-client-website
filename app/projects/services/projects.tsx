import { apiRequest } from "@/lib/api/apiRequest";
import { Project } from "../types/project.types";

export const getProjects = () =>
  apiRequest<Project[]>({
    method: "GET",
    url: "/projects",
  }).then((projects) => (Array.isArray(projects) ? projects : []));
