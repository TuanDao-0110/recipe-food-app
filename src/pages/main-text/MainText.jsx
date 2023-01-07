import React from "react";
import {  NavLink } from "react-router-dom";
import style from "./mainText.module.css";
export default function MainText() {
  return (
    <div className={style["main-text"]}>
      <h2>Let's enjoy food ...</h2>
      <h1>...food project </h1>
      <p>let enjoy our food</p>

      <NavLink to={"/recipe_list"}>
        <button className="button px-5 py-2"> let find out</button>
      </NavLink>
    </div>
  );
}
