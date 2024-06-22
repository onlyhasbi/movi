import FilledFavorite from "../assets/icons/filled-favorite.svg?react";
import FillWatchlist from "../assets/icons/filled-watchlist.svg?react";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import useSession from "../hooks/useSession";
import styles from "./card.module.css";
import { useLocation } from "react-router-dom";
import { useMovieStore } from "../store";
import { Movie } from "../types";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Toggle = ({ movie }: { movie: Movie }) => {
  const currentPath = useLocation().pathname;
  const { isAuthenticated } = useSession();
  const { setAuthModal } = useContext(AuthContext);
  const { watchlist, favorites, toggleWatchlist, toggleFavorite } =
    useMovieStore();

  const isFavoriteVisible = !(currentPath == "/watchlist");
  const isWatchlistVisible = !(currentPath == "/favorite");

  const findCallback = (w: Movie) => w.id == movie.id;
  const isWatchlist = Boolean(watchlist.find(findCallback));
  const isFavorite = Boolean(favorites.find(findCallback));

  return (
    <>
      <span
        style={{ display: isWatchlistVisible ? "block" : "none" }}
        onClick={() =>
          isAuthenticated ? toggleWatchlist(movie) : setAuthModal(true)
        }
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
        onClick={() =>
          isAuthenticated ? toggleFavorite(movie) : setAuthModal(true)
        }
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
