import {
  Outlet,
  ScrollRestoration,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Loading from "../assets/loading.svg?react";
import Header from "./header.layout";
import styles from "./layout.module.css";
import { useContext, useEffect } from "react";
import Modal from "../components/modal.component";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
  const isLoading = useNavigation().state == "loading";
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();

  useEffect(() => {
    if (window.location.pathname === "/" || !isAuthenticated) {
      navigate("/movies");
    }
  }, [navigate, isAuthenticated]);

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
      <Outlet />
      <Modal isOpen={authModal} onClose={() => setAuthModal(false)} />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
