/* eslint-disable react-refresh/only-export-components */
import { Link, NavLink } from "react-router-dom";
import styles from "./layout.module.css";

const Header = () => {
  const navigationPath = [
    { path: "/favorite", label: "Favorite" },
    { path: "/watchlist", label: "Watchlist" },
  ];

  return (
    <div className={styles.header}>
      <div className="container between">
        <Link className={styles.header_title} to="/movies">
          CINEMA
        </Link>
        <div className={styles.header_menu}>
          {navigationPath.map(({ path, label }) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.header_menu__item} active`
                    : styles.header_menu__item;
                }}
                to={path}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
