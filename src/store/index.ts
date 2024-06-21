import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MovieStore } from "../types";

export type StateMovie = {
  watchlist: Array<MovieStore>;
  favorites: Array<MovieStore>;
};

export type ActionMovie = {
  toggleWatchlist: (movie: MovieStore) => void;
  toggleFavorite: (movie: MovieStore) => void;
};

const toggleMovieInList = (
  movies: Array<MovieStore>,
  movie: MovieStore
): Array<MovieStore> => {
  return movies.find((m) => m.id === movie.id)
    ? movies.filter((m) => m.id !== movie.id)
    : [...movies, movie];
};

export const useMovieStore = create<StateMovie & ActionMovie>()(
  persist(
    (set, get) => ({
      watchlist: [],
      favorites: [],
      toggleWatchlist: (movie) =>
        set({
          watchlist: toggleMovieInList(get().watchlist, movie),
        }),
      toggleFavorite: (movie) =>
        set({
          favorites: toggleMovieInList(get().favorites, movie),
        }),
    }),
    {
      name: "movie_store",
    }
  )
);
