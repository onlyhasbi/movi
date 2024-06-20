/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OutlineFavorite from "../assets/icons/outline-favorite.svg?react";
import OutlineWatchlist from "../assets/icons/outline-watchlist.svg?react";
import styles from "./cover.module.css";

type Props = Partial<{
  id: string;
  photo: string;
  background: string;
  title: string;
  date: string;
  score: number;
  watchlist: boolean;
  favorite: boolean;
  category: Array<string>;
  duration: string;
  description: string;
  overview: string;
}>;

function Cover(props: Props) {
  const year = new Date(props?.date ?? Date.now()).getFullYear();

  return (
    <div className={styles.cover_container}>
      <div className={`container ${styles.cover_items}`}>
        <div className={styles.cover_photo}>{props.photo ?? "Photo"}</div>
        <div className={styles.cover_info}>
          <h3 className={styles.cover_title}>
            {props.title}
            <span className={styles.cover_title__date}>({year})</span>
          </h3>
          <ul className={styles.cover_movie__info}>
            <li>{props.date}</li>
            <li>
              {props.category?.length == 1
                ? props.category[0]
                : props.category?.join(", ")}
            </li>
            <li>{props.duration}</li>
          </ul>
          <div className={styles.cover_user__info}>
            <div className={styles.circular_container}>
              <span className={styles.circular_info}>
                <CircularProgressbar
                  value={props.score!}
                  text={props.score!.toString()}
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
            <span className={styles.icon_watchlist}>
              <OutlineWatchlist />
            </span>
            <span className={styles.icon_favorite}>
              <OutlineFavorite />
            </span>
          </div>
          <p className={styles.cover_description}>{props.description}</p>
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
