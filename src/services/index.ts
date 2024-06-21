import { Endpoint } from "../types";
import { getUrl, headers } from "./service.config";

/**
 * Makes a GET request to the specified endpoint.
 *
 * @param key - One of the predefined endpoints or "recommendations".
 * @param series_id - Optional series id required for recommendations endpoint.
 * @returns A promise that resolves to the fetch response.
 */

const endpoint = {
  auth: "/authentication/guest_session/new",
  now_playing: "/movie/now_playing?language=en-US&page=1",
  top_rated: "/movie/top_rated?language=en-US&page=1",
};

export const getRequest = async (
  key: Endpoint | "recommendations",
  series_id?: string
) => {
  let url = "";

  if (key == "recommendations" && series_id) {
    url = getUrl(`/tv/${series_id}/recommendations`);
  } else {
    url = getUrl(endpoint[key as Endpoint]);
  }

  return await fetch(url, {
    method: "GET",
    headers,
  });
};
