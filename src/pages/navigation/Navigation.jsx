import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./navigation.module.css";
export default function Navigation() {
  return (
    <nav className={style["nav"]}>
      <div className="">
        <a href="#">
          <img src={require("../../img/logo.png")} alt="" width={"100px"} srcset="" />
        </a>
      </div>
      <ul className="">
        <li>
          <NavLink to={"/"}>Hello</NavLink>
        </li>
        <li>
          <NavLink to={'/add'}>add recipe</NavLink>
        </li>
        <li>
          <NavLink to={'/recipe_list'}>recipe list</NavLink>
        </li>
      </ul>
    </nav>
  );
}
