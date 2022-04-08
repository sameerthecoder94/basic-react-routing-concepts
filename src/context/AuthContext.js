import { createContext, useState } from 'react';

export const AuthContext = createContext({
  signedIn: false,
});

const AuthContextProvider = (props) => {
  const { children } = props;
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
