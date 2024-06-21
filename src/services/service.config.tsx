export const getUrl = (endpoint: string) =>
  `https://api.themoviedb.org/3${endpoint}`;

export const getImage = (filename: string) =>
  `https://image.tmdb.org/t/p/original/${filename}`;

export const headers = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
};
