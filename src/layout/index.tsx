import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loading from "../assets/loading.svg?react";
import Header from "./header.layout";
import styles from "./layout.module.css";
import { useEffect } from "react";

const Layout = () => {
  const isLoading = useNavigation().state == "loading";

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/movies");
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="center">
        <div className={styles.loading}>
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
