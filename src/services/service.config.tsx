export const getUrl = (endpoint: string) =>
  `https://api.themoviedb.org${endpoint}`;

export const headers = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
};
