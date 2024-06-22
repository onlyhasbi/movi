import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import useFetch from "../hooks/useFetch";
import { AuthResponse } from "../types";
import useSession from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { setSession } = useSession();

  const { isLoading, fetchData } = useFetch<AuthResponse>({
    key: "auth",
    callback: {
      onSuccess: (data: AuthResponse) => {
        setSession({
          sessionData: JSON.stringify(data),
          expireAt: data.expires_at,
        });
        navigate(0);
        onClose();
      },
    },
  });

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

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content} ref={modalRef}>
        <img
          className={styles.logo}
          src="./tmdb-logo.png"
          alt="tmdb-logo"
        />
        <button onClick={fetchData} className={styles.login_button}>
          {isLoading ? "Authenticating..." : "Login with TMDB"}
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
