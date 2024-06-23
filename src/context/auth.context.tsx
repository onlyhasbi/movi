import { PropsWithChildren, createContext, useState } from 'react';

type AuthContextType = {
  authModal: boolean;
  setAuthModal: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authModal, setAuthModal] = useState(false);

  const value = {
    authModal,
    setAuthModal
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
