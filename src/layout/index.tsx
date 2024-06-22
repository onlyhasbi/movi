import { useContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Modal from "../components/modal.component";
import { AuthContext } from "../context/auth.context";
import Header from "./header.layout";

const Layout = () => {
  const { authModal, setAuthModal } = useContext(AuthContext);
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
