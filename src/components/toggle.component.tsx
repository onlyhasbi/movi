import FilledFavorite from "../assets/icons/filled-favorite.svg?react";
import FillWatchlist from "../assets/icons/filled-watchlist.svg?react";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import useSession from "../hooks/useSession";
import { useLocation } from "react-router-dom";
import { useMovieStore } from "../store";
import { Movie } from "../types";
import styles from "./card.module.css";

const Toggle = ({ movie }: { movie: Movie }) => {
  const { isAuthenticated } = useSession();
  const currentPath = useLocation().pathname;
  const { watchlist, favorites, toggleWatchlist, toggleFavorite } =
    useMovieStore();

  const isPathVisible = (
    currentPath: string,
    staticPaths: string[],
    dynamicPattern: RegExp
  ) => staticPaths.includes(currentPath) || dynamicPattern.test(currentPath);

  const commonDynamicPattern = /^\/movies\/[0-9]+$/;

  const isFavoriteVisible = isPathVisible(
    currentPath,
    ["/movies", "/favorite"],
    commonDynamicPattern
  );

  const isWatchlistVisible = isPathVisible(
    currentPath,
    ["/movies", "/watchlist"],
    commonDynamicPattern
  );

  const findCallback = (w: Movie) => w.id == movie.id;
  const isWatchlist = Boolean(watchlist.find(findCallback));
  const isFavorite = Boolean(favorites.find(findCallback));

  return (
    <>
      <span
        style={{ display: isWatchlistVisible ? "block" : "none" }}
        onClick={() => isAuthenticated && toggleWatchlist(movie)}
        className={styles.icon_watchlist}
      >
        {isWatchlist && isAuthenticated ? (
          <FillWatchlist />
        ) : (
          <OutlineWatchlist />
        )}
      </span>
      <span
        style={{ display: isFavoriteVisible ? "block" : "none" }}
        onClick={() => isAuthenticated && toggleFavorite(movie)}
        className={styles.icon_favorite}
      >
        {isFavorite && isAuthenticated ? (
          <FilledFavorite />
        ) : (
          <OutlineFavorite />
        )}
      </span>
    </>
  );
};

export default Toggle;
