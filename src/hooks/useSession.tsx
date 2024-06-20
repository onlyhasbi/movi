import Cookies from "js-cookie";

type SetSessionProps = {
  sessionData: string;
  expireAt: string;
};

const useSession = () => {
  const SESSION = "session";

  const isAuthenticated = Cookies.get(SESSION);

  const setSession = ({ sessionData, expireAt }: SetSessionProps) => {
    const expires = new Date(expireAt);
    Cookies.set(SESSION, sessionData, { expires });
  };

  return { isAuthenticated, setSession };
};

export default useSession;
