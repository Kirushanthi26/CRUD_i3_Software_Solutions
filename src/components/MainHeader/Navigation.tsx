import React from "react";
import style from "./Navigation.module.css";

const Navigation: React.FC<{isLoggedIn: boolean, onLogout:()=>void}> = (props) => {
  return (
    <ul className={style.nav}>
      <li>
        {props.isLoggedIn && (<button onClick={props.onLogout}>Login out</button>)}
      </li>
    </ul>
  );
};

export default Navigation;
