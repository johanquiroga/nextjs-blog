import React, { useState } from 'react';

type AuthStateType = { user: any | null };

type AuthContextType = {
  user: any | null;
  setUser: (newUser: any | null) => void;
};
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

function AuthProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<AuthStateType>({ user: null });

  const value = { user, setUser };

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };