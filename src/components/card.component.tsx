import { useLocation, useNavigate } from "react-router-dom";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import FilledFavorite from "../assets/icons/filled-favorite.svg?react";
import FillWatchlist from "../assets/icons/filled-watchlist.svg?react";
import { getImage } from "../services/service.config";
import { Movie } from "../types";
import { getYear } from "../utils/formatDate";
import { useMovieStore } from "../store";
import styles from "./card.module.css";

type Props = { movie: Movie };

const Card = ({ movie }: Props) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const isFavoriteVisible =
    currentPath == "/movies" || currentPath == "/favorite";
  const isWatchlistVisible =
    currentPath == "/movies" || currentPath == "/watchlist";

  const { watchlist, favorites, toggleWatchlist, toggleFavorite } =
    useMovieStore();

  const findCallback = (w: Movie) => w.id == movie.id;
  const isWatchlist = Boolean(watchlist.find(findCallback));
  const isFavorite = Boolean(favorites.find(findCallback));

  return (
    <div className={styles.movie_card} key={movie.id}>
      <div className={styles.card_item}>
        <img
          className={styles.card_poster}
          src={getImage(movie.poster_path)}
          alt={`image-${movie.id}`}
          loading="lazy"
        />
        <span className={styles.card_icons}>
          <span
            style={{ display: isWatchlistVisible ? "block" : "none" }}
            onClick={() => toggleWatchlist(movie)}
            className={styles.icon_watchlist}
          >
            {isWatchlist ? <FillWatchlist /> : <OutlineWatchlist />}
          </span>
          <span
            style={{ display: isFavoriteVisible ? "block" : "none" }}
            onClick={() => toggleFavorite(movie)}
            className={styles.icon_favorite}
          >
            {isFavorite ? <FilledFavorite /> : <OutlineFavorite />}
          </span>
        </span>
      </div>
      <span className={styles.footer_card}>
        <h3
          className={`${styles.footer_card__title} truncate`}
          onClick={() => navigate(`/movies/${movie.id}`)}
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className={styles.footer_card__year}>
          {getYear(movie.release_date)}
        </p>
      </span>
    </div>
  );
};

export default Card;
