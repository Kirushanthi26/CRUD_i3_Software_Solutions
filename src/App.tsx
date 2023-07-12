import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storeLoggedInInfo = sessionStorage.getItem("isLogIn");
    if (storeLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username: string, password: string | number) => {
    sessionStorage.setItem("isLogIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("isLogIn")
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
