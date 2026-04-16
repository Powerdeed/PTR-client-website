import { apiRequest } from "@/lib/api/apiRequest";
import { Service } from "../types/service.types";

export const getServices = () =>
  apiRequest<Service[]>({
    method: "GET",
    url: "/services",
  });
