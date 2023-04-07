import React from "react";
import HeaderBg from "../../assets/header.svg";
import style from "./header.module.sass";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>PhMenu</h1>
    </div>
  );
};

export default Header;
