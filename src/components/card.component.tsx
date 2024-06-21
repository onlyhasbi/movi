import { useNavigate } from "react-router-dom";

import { getImage } from "../services/service.config";
import { Movie } from "../types";
import { getYear } from "../utils/formatDate";
import styles from "./card.module.css";
import Toggle from "./toggle.component";

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
          loading="lazy"
        />
        <span className={styles.card_icons}>
          <Toggle movie={movie} />
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
