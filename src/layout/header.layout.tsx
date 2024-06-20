/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";
import styles from "./layout.module.css";

const Header = () => {
  const navigationPath = [
    { path: "/favorite", label: "Favorite" },
    { path: "/watchlist", label: "Watchlist" },
  ];

  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const { setAuthModal } = useContext(AuthContext);

  const { isAuthenticated } = useSession();

  return (
    <>
      <div className={styles.header}>
        <div className="container between">
          <Link className={styles.header_title} to="/movies">
            CINEMA
          </Link>
          <div className={styles.header_menu}>
            {navigationPath.map(({ path, label }) => {
              return (
                <button
                  key={path}
                  className={`${styles.header_menu__item} ${
                    currentPath == path ? "active" : ""
                  }`}
                  onClick={() => {
                    if (isAuthenticated) {
                      navigate(path);
                    } else {
                      setAuthModal(true);
                    }
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
