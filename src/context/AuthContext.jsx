import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSigned,setSigned] = useState(false);
  const Login = (email,password) => {
    if(email && password)
    {
      setSigned(true);
    }
  };
  const Logout = () =>{
    setSigned(false);
  };
  return <AuthContext.Provider value={{isSigned,Login,Logout}}>{children}</AuthContext.Provider>;
};
