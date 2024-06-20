import styles from "./card.module.css";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import { useNavigate } from "react-router-dom";

type Props = { index: number };

const Card = ({ index }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.movie_card} key={index}>
      <div
        className={styles.card_item}
      >
        <p>{index + 1}</p>
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
          onClick={() => navigate(`/movies/${index}`)}
          title="Movie Title Lorem Ipsum"
        >
          Movie Title Lorem Ipsum
        </h3>
        <p className={styles.footer_card__year}>2023</p>
      </span>
    </div>
  );
};

export default Card;
