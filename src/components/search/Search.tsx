import React from "react";
import style from "./search.module.sass";
import { IconType } from "react-icons";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: IconType;
}

const Search = ({ icon: Icon, ...rest }: SearchProps) => {
  return (
    <div className={style.input}>
      <input type="text" {...rest} />
      {<Icon className={style.icon} />}
    </div>
  );
};

export default Search;
