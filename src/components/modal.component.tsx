import { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import useAuth from "../hooks/useAuth";
import useSession from "../hooks/useSession";
import { AuthContext } from "../context/auth.context";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
  const [authenticate, setIsAuthenticate] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { authenticated, isLoading } = useAuth({ enabled: authenticate });
  const { setAuthModal } = useContext(AuthContext);
  const { setSession } = useSession();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    if (authenticated?.guest_session_id) {
      setSession({
        sessionData: JSON.stringify(authenticated),
        expireAt: authenticated.expires_at,
      });
      setAuthModal(false);
    }
  }, [authenticated, setAuthModal, setSession]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content} ref={modalRef}>
        <img className={styles.logo} src="./tmdb-logo.png" alt="tmdb-logo" />
        <button
          onClick={() => setIsAuthenticate(true)}
          className={styles.login_button}
        >
          {isLoading ? "Authenticating..." : "Login with TMDB"}
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
