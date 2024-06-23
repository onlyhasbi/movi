/* eslint-disable import/no-unresolved */
import Toggle from './toggle.component';
import ImageOff from '../assets/icons/image-off.svg?react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { getImage } from '../services/service.config';
import { Movie } from '../types';
import { getYear } from '../utils/formatDate';
import styles from './card.module.css';

type Props = { movie: Movie };

const Card = ({ movie }: Props) => {
  const navigate = useNavigate();
  const isLoading = useNavigation().state == 'loading';

  return (
    <div className={styles.movie_card} key={movie.id}>
      <span className={styles.card_icons}>
        <Toggle movie={movie} />
      </span>
      <div onClick={() => navigate(`/movies/${movie.id}`)}>
        <div className={`${styles.card_item} ${isLoading ? 'pulse' : ''}`}>
          {movie?.poster_path ? (
            <img
              style={{ display: isLoading ? 'hidden' : 'block' }}
              className={styles.card_poster}
              src={getImage(movie.poster_path)}
              alt={`image-${movie.id}`}
              loading="lazy"
            />
          ) : (
            <div className={styles.card_noimage}>
              <ImageOff style={{ width: '5rem', height: '5rem' }} />
              <p>No Image</p>
            </div>
          )}
        </div>
        <span className={styles.footer_card}>
          <h3 className={`${styles.footer_card__title} truncate`} title={movie.title}>
            {movie.title}
          </h3>
          <p className={styles.footer_card__year}>{getYear(movie.release_date)}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
