import LoadingIcon from "../assets/loading.svg?react";
import styles from "./layout.module.css";

const Loading = () => (
  <div className="center">
    <div className={styles.loading}>
      <LoadingIcon />
    </div>
  </div>
);

export default Loading;
