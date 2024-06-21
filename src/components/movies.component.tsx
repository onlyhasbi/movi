import React from "react";
import { Movie as MovieType } from "../types";
import Card from "./card.component";
import styles from "./movies.module.css";

type Props = {
  data: Array<MovieType>;
  fontSize: "lg" | "md";
  title: string;
  style?: React.CSSProperties;
  rows?: number;
  scrollable?: boolean;
  className?: string;
};

const titleStyle = {
  lg: styles.title_lg,
  md: styles.title_md,
};

const Movie = ({
  data,
  fontSize,
  title,
  scrollable = false,
  rows = 1,
  style,
  className,
}: Props) => {
  const renderMovies = (movies: Array<MovieType>) =>
    movies.map((movie) => <Card movie={movie} key={movie.id} />);

  const content = scrollable ? (
    <div className={styles.scrollable_movie__list}>{renderMovies(data)}</div>
  ) : (
    <div className={rows === 1 ? styles.movie_list : styles.movie_grid}>
      {renderMovies(data)}
    </div>
  );

  return (
    <div style={style} className={className}>
      <h3 className={`${styles.movie_label} ${titleStyle[fontSize]}`}>
        {title}
      </h3>
      {content}
    </div>
  );
};

export default Movie;
