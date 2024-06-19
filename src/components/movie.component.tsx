import React from "react";
import styles from "./movie.module.css";

type Props = {
  fontSize: "lg" | "md";
  title: string;
  style?: React.CSSProperties;
  rows?: number;
  draggable?: boolean;
};

const titleStyle = {
  lg: styles.title_lg,
  md: styles.title_md,
};

const Movie = ({
  fontSize,
  title,
  draggable = false,
  rows = 1,
  style,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    const ele = containerRef.current;
    if (!ele) {
      return;
    }
    const startPos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      ele.scrollTop = startPos.top - dy;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleMouseUp = () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove as unknown as EventListenerOrEventListenerObject
      );
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor(ele);
    };

    document.addEventListener(
      "mousemove",
      handleMouseMove as unknown as EventListenerOrEventListenerObject
    );
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const ele = containerRef.current;
    if (!ele) {
      return;
    }
    const touch = e.touches[0];
    const startPos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: touch.clientX,
      y: touch.clientY,
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      ele.scrollTop = startPos.top - dy;
      ele.scrollLeft = startPos.left - dx;
      updateCursor(ele);
    };

    const handleTouchEnd = () => {
      document.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListenerOrEventListenerObject
      );
      document.removeEventListener("touchend", handleTouchEnd);
      resetCursor(ele);
    };

    document.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListenerOrEventListenerObject
    );
    document.addEventListener("touchend", handleTouchEnd);
  }, []);

  const updateCursor = (ele: HTMLDivElement) => {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
  };

  const resetCursor = (ele: HTMLDivElement) => {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  const content = draggable ? (
    <div
      className={styles.draggable_movie__list}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {Array.from({ length: 60 }, (_, index) => {
        return (
          <div className={styles.movie_card} key={index}>
            {index}
            <span className={styles.footer_card}></span>
          </div>
        );
      })}
    </div>
  ) : (
    <div className={rows == 1 ? styles.movie_list : styles.movie_grid}>
      {Array.from({ length: 12 }, (_, index) => {
        return (
          <div className={styles.movie_card} key={index}>
            {index}
            <span className={styles.footer_card}></span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={style}>
      <h3 className={`${styles.movie_label} ${titleStyle[fontSize]}`}>
        {title}
      </h3>
      {content}
    </div>
  );
};

export default Movie;
