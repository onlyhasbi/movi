/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";
import styles from "./layout.module.css";
import DoorExit from "../assets/icons/logout.svg?react";
import { getRequest } from "../services";

const Header = () => {
  const navigationPath = [
    { path: "/favorite", label: "Favorite" },
    { path: "/watchlist", label: "Watchlist" },
  ];

  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const { setAuthModal } = useContext(AuthContext);

  const { isAuthenticated, removeSession } = useSession();

  const removeApiSession = async () =>
    await getRequest({
      key: "logout",
      method: "DELETE",
      body: JSON.stringify(isAuthenticated),
    });

  const handleLogout = () => {
    removeApiSession();
    removeSession();
    navigate(0);
  };

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
                <span
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
                </span>
              );
            })}
            <Logout
              isAuthenticated={Boolean(isAuthenticated)}
              onLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function Logout({
  isAuthenticated,
  onLogout: handleLogout,
}: {
  isAuthenticated: boolean;
  onLogout: () => void;
}) {
  if (!isAuthenticated) return null;

  return (
    <span className={styles.header_menu__item} onClick={handleLogout}>
      <DoorExit />
    </span>
  );
}

export default Header;
