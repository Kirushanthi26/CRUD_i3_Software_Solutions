import React from "react";
import style from "./Navigation.module.css";

const Navigation: React.FC<{isLoggedIn: boolean}> = (props) => {
  return (
    <ul className={style.nav}>
      <li>
        {props.isLoggedIn && (<button>Login out</button>)}
      </li>
    </ul>
  );
};

export default Navigation;
