import React, { useEffect, useState } from "react";
import { handleGetCountryFlag } from "../service/sevices";
import style from "./cardfood.module.css";
export default function CardFood({ item, setPopup, setDetail }) {
  const { country, name, cooking_time, nutrition, image } = item;
  const [flagState, setFlagState] = useState("  🇹🇭");

  useEffect(() => {
    handleGetCountryFlag(country)
      .then((flag) => setFlagState(flag))
      .catch(console.log());
  }, [country]);
  const renderNutrition = () => {
    let render = [];
    for (let i in nutrition) {
      render.push(`${nutrition[i]} ${i}, `);
    }
    return render;
  };
  return (
    <div className={style["card"]}>
      <div className={style["img"]}>
        <img src={`${image}`} alt="" />
      </div>
      <div className={style["title"]}>{country} </div>
      <div className={style["flag"]}>{flagState}</div>
      <div className={style["content"]}>
        <h1 className=" w-full ">{name}</h1>
        <div className={style["details"]}>
          <p>
            <span className="material-symbols-outlined  ">alarm_on</span> <span>{cooking_time} mins</span>
          </p>
          <p>
            <span className="material-symbols-outlined  ">nutrition</span>
            <span>Nutritions: {renderNutrition()}</span>
          </p>
          <button
            onClick={() => {
              setDetail(item);
              setPopup(true);
            }}
            className="button text-sm p-2 my-5"
          >
            more details
          </button>
        </div>
      </div>
    </div>
  );
}
