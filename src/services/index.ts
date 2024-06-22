import { getUrl, headers } from "./service.config";

const endpoint = (id_params?: string) => {
  return {
    auth: "/authentication/guest_session/new",
    now_playing: "/movie/now_playing?language=en-US&page=1",
    top_rated: "/movie/top_rated?language=en-US&page=1",
    detail: `/movie/${id_params}`,
    recommendations: `/movie/${id_params}/recommendations`,
    search: `/search/movie?query=${id_params}&include_adult=false&language=en-US&page=1`,
    logout: "/authentication/session",
  };
};

export type Endpoint = keyof ReturnType<typeof endpoint>;
type PropRequest = {
  key: Endpoint;
  id_params?: string;
  method?: string;
  body?: string;
};

export const getRequest = async ({
  key,
  id_params,
  method = "GET",
  body,
}: PropRequest) => {
  return await fetch(getUrl(endpoint(id_params)[key as Endpoint]), {
    method,
    headers,
    body,
  });
};
