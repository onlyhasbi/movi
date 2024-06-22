import Header from "./header.layout";
import Modal from "../components/modal.component";
import useSession from "../hooks/useSession";
import { useContext, useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
  const { isAuthenticated } = useSession();
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const protectedPaths = ["/", "/watchlist", "/favorite"];
    if (protectedPaths.includes(currentPath) && !isAuthenticated) {
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
