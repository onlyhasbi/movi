import Modal from '../components/modal.component';
import Header from './header.layout';
import { useContext } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

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
