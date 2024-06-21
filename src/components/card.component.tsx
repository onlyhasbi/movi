import styles from "./card.module.css";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types";
import { getImage } from "../services/service.config";

type Props = { movie: Movie };

const Card = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.movie_card} key={movie.id}>
      <div className={styles.card_item}>
        <img
          className={styles.card_poster}
          src={getImage(movie.poster_path)}
          alt={`image-${movie.id}`}
        />
        <span className={styles.card_icons}>
          <span className={styles.icon_watchlist}>
            <OutlineWatchlist />
          </span>
          <span className={styles.icon_favorite}>
            <OutlineFavorite />
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
          {new Date(movie.release_date).getFullYear()}
        </p>
      </span>
    </div>
  );
};

export default Card;
