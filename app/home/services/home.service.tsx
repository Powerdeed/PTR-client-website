import { apiRequest } from "@/lib/api/apiRequest";

import { Homepage } from "../types/home.types";

export const getHomePageData = () =>
  apiRequest<Homepage>({
    method: "GET",
    url: "/homepage",
  });
