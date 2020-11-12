import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const AuthController: React.FC<{}> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    window.localStorage.getItem("loggedIn") === "true"
  );
  const history = useHistory();

  function handleLogin() {
    setIsLoggedIn(true);
    window.localStorage.setItem("loggedIn", "true");
    history.push("/dashboard");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    window.localStorage.setItem("loggedIn", "false");
  }
  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthController;
