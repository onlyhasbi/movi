import { useContext, useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Modal from "../components/modal.component";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";
import Header from "./header.layout";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
  const { isAuthenticated } = useSession();
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (["/watchlist", "/favorite"].includes(currentPath) && !isAuthenticated) {
      navigate("/movies");
    }
  }, [navigate, isAuthenticated, currentPath]);

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
