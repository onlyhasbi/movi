import { getUrl, headers } from "./service.config";

const endpoint = (id?: string) => {
  return {
    auth: "/authentication/guest_session/new",
    now_playing: "/movie/now_playing?language=en-US&page=1",
    top_rated: "/movie/top_rated?language=en-US&page=1",
    detail: `/movie/${id}`,
    recommendations: `/movie/${id}/recommendations`,
  };
};

type Endpoint = keyof ReturnType<typeof endpoint>;

export const getRequest = async (key: Endpoint, movie_id?: string) => {
  return await fetch(getUrl(endpoint(movie_id)[key as Endpoint]), {
    method: "GET",
    headers,
  });
};
