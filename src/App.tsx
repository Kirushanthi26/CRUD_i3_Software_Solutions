import React, { Fragment, useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loginHandler = (username:string, password:string|number) => {
    
    console.log(username, password)
    setIsLoggedIn(true);
  };

   const logoutHandler = () => {
     setIsLoggedIn(false);
   };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
