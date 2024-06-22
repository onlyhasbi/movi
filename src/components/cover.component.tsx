/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getImage } from "../services/service.config";
import { MovieDetail } from "../types";
import { calculateUserScore } from "../utils/calculateUserScore";
import { durationFormat, getYear, reformatDate } from "../utils/formatDate";
import styles from "./cover.module.css";
import Toggle from "./toggle.component";

function Cover(props: MovieDetail) {
  const userScore = calculateUserScore(props.vote_average, props.vote_count);

  return (
    <div
      style={{ backgroundImage: `url(${getImage(props.backdrop_path)})` }}
      className={styles.cover_container}
    >
      <div className={`container ${styles.cover_items}`}>
        <img
          className={styles.cover_photo}
          src={getImage(props.poster_path)}
          alt={`image-${props.id}`}
          loading="lazy"
        />
        <div className={styles.cover_info}>
          <h3 className={styles.cover_title}>
            {props.title}
            <span className={styles.cover_title__date}>
              ({getYear(props.release_date)})
            </span>
          </h3>
          <ul className={styles.cover_movie__info}>
            <li>{reformatDate(props.release_date)}</li>
            <li>
              {props.genres?.length == 1
                ? props.genres[0].name
                : props.genres?.map(({ name }) => name).join(", ")}
            </li>
            <li>{durationFormat(props.runtime)}</li>
          </ul>
          <div className={styles.cover_user__info}>
            <div className={styles.circular_container}>
              <span className={styles.circular_info}>
                <CircularProgressbar
                  value={userScore}
                  text={userScore.toString()}
                  background
                  backgroundPadding={10}
                  styles={{
                    background: {
                      fill: "#fff",
                    },
                    text: {
                      fontSize: "3rem",
                      fontWeight: 700,
                      fill: "#0EA5E9",
                    },
                    path: {
                      stroke: "#0EA5E9",
                      strokeLinecap: "butt",
                    },
                    trail: {
                      stroke: "#EDEDED",
                    },
                  }}
                />
              </span>
              <span className={styles.circular_text}>User score</span>
            </div>
            <Toggle
              movie={{
                id: props.id,
                poster_path: props.poster_path,
                release_date: props.release_date,
                title: props.title,
              }}
            />
          </div>
          <p className={styles.cover_description}>{props.tagline}</p>
          <div className={styles.cover_overview}>
            <h4>Overview</h4>
            <p>{props.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
