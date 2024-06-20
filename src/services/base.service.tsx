import { getUrl, headers } from "./service.config";

export const getAuthService = fetch(
  getUrl("/3/authentication/guest_session/new"),
  {
    method: "GET",
    headers,
  }
);
