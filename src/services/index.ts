import { getUrl, headers } from './service.config';

const endpoint = (idParams?: string) => {
  return {
    auth: '/authentication/guest_session/new',
    now_playing: '/movie/now_playing?language=en-US&page=1',
    top_rated: '/movie/top_rated?language=en-US&page=1',
    detail: `/movie/${idParams}`,
    recommendations: `/movie/${idParams}/recommendations`,
    search: `/search/movie?query=${idParams}&include_adult=false&language=en-US&page=1`,
    logout: '/authentication/session'
  };
};

export type Endpoint = keyof ReturnType<typeof endpoint>;
type PropRequest = {
  key: Endpoint;
  idParams?: string;
  method?: string;
  body?: string;
};

export const getRequest = async ({ key, idParams, method = 'GET', body }: PropRequest) => {
  return await fetch(getUrl(endpoint(idParams)[key as Endpoint]), {
    method,
    headers,
    body
  });
};
