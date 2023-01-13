import React, { useEffect, useState } from "react";
import ConfirmDelete from "../popup/ConfirmDelete";
import { handleDelete, handleGetCountryFlag } from "../service/sevices";
import style from "./cardfood.module.css";
export default function CardFood({ item, setPopup, setDetail }) {
  const { country, name, cooking_time, nutrition, image, id } = item;
  const [flagState, setFlagState] = useState("  🇹🇭");
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  useEffect(() => {
    handleGetCountryFlag(country)
      .then((flag) => setFlagState(flag))
      .catch((err) => console.log(err));
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
          <p className="text-base">
            <span className="material-symbols-outlined  ">alarm_on</span> <span>{cooking_time} mins</span>
          </p>
          <p className="text-base">
            <span className="material-symbols-outlined  ">nutrition</span>
            <span>Nutritions: {renderNutrition()}</span>
          </p>
          <div className="flex w-full justify-around my-5 relative">
            {deleteConfirm ? <ConfirmDelete handleDelete={handleDelete} id={id} setDeleteConfirm={setDeleteConfirm} /> : ""}
            <button
              onClick={() => {
                setDetail(item);
                setPopup(true);
              }}
              className="button text-sm p-2 "
            >
              more details
            </button>
            <button
              onClick={() => {
                setDeleteConfirm(true);
              }}
              className="button_red text-sm px-2 relative "
            >
              <span>delete food</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
