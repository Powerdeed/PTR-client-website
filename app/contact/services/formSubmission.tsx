import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { apiRequest } from "@/lib/api/apiRequest";

export const sendInquiry = (data: DEFAULT_FORM_DATA) =>
  apiRequest({
    method: "POST",
    url: "/inquiry",
    data,
  });
