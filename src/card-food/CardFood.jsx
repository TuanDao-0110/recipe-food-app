import React from "react";
import style from "./cardfood.module.css";
export default function CardFood() {
  return (
    <div className={style["card"]}>
      <div className={style["img"]}>
        <img src="https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg" alt="" />
      </div>
      <div className={style["title"]}>Thai </div>
      <div className={style["content"]}>
        <h1 className=" w-full ">Chicken Alfredo</h1>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
      </div>
    </div>
  );
}
