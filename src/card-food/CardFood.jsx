import React from "react";
import style from "./cardfood.module.css";
export default function CardFood() {
  return (
    <div className={style["card"]}>
      <div className={style["img"]}>
        <img src="https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg" alt="" />
      </div>
      <div className={style["title"]}>Thai </div>
      <div className={style["flag"]}>
        {/* <img src="https://flagcdn.com/aw.svg" alt="" /> */}
        🇹🇭
      </div>
      <div className={style["content"]}>
        <h1 className=" w-full ">Chicken Alfredo</h1>
        <p>
          <span className="material-symbols-outlined  ">alarm_on</span> <span>400 mins</span>
        </p>
        <p>
          <span className="material-symbols-outlined  ">nutrition</span>
          <span>Nutritions: 500 fat, 500 calories, 40 carbohydrates, 50 protein</span>
        </p>
      </div>
      <div className="p-5">
        <button className="button text-sm p-2">more details</button>
      </div>
    </div>
  );
}
