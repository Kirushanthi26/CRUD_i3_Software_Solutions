import React from "react";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={style.nav}>
      <li>
        <button>Login out</button>
      </li>
    </ul>
  );
};

export default Navigation;
