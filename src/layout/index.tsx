import { useContext, useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Modal from "../components/modal.component";
import { AuthContext } from "../context/auth.context";
import useSession from "../hooks/useSession";
import Header from "./header.layout";
import Loading from "./loading.layout";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoading = useNavigation().state == "loading";
  const { isAuthenticated } = useSession();

  useEffect(() => {
    if (window.location.pathname === "/" || !isAuthenticated) {
      navigate("/movies");
    }
  }, [navigate, isAuthenticated]);

  if (isLoading) {
    return <Loading />;
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
