import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./mainText.module.css";
export default function MainText() {
  return (
    <div className={style["main-text"]}>
      <h2>Let's enjoy food ...</h2>
      <h1>...food project </h1>
      <p>let enjoy our food</p>

      <Link>
        <button className="button"> let find out</button>
      </Link>
    </div>
  );
}
