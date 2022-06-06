import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from"react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [logcrd, setLogcrd] = useState({});
  const {login} = useContext(AuthContext);
  console.log(navigate);
console.log(logcrd);
console.log(login);
console.log(setLogcrd);
  return (
    <div>
      <input data-cy="login-email" type="email" />
      <input data-cy="login-password" type="password"/>
      <button data-cy="login-submit">Login</button>
    </div>
  );
 
  
};


export default Login;
