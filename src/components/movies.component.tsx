import React from "react";
import Card from "./card.component";
import styles from "./movies.module.css";
import { Movie as MovieType } from "../types";

type Props = {
  data: Array<MovieType>;
  fontSize: "lg" | "md";
  title: string;
  style?: React.CSSProperties;
  empty?: React.ReactNode;
  rows?: boolean;
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
  empty,
  scrollable = false,
  rows = false,
  style,
  className,
}: Props) => {
  const isEmpty = data.length == 0;

  const renderMovies = (movies: Array<MovieType>) =>
    movies.map((movie) => <Card movie={movie} key={movie.id} />);

  const content = scrollable ? (
    <div className={styles.scrollable_movie__list}>{renderMovies(data)}</div>
  ) : (
    <div className={!rows ? styles.movie_list : styles.movie_grid}>
      {renderMovies(data)}
    </div>
  );

  return (
    <div style={style} className={className}>
      <h3 className={`${styles.movie_label} ${titleStyle[fontSize]}`}>
        {title}
      </h3>
      {isEmpty ? empty : content}
    </div>
  );
};

export default Movie;
