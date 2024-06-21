import { useContext, useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Modal from "../components/modal.component";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";
import Header from "./header.layout";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();

  useEffect(() => {
    if (window.location.pathname === "/" || !isAuthenticated) {
      navigate("/movies");
    }
  }, [navigate, isAuthenticated]);

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
