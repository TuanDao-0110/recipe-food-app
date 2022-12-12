import React from "react";
import style from "./fooddetails.module.css";
export default function FoodDetails({ popup, setPopup, detail }) {
  const { name, author, country, description, image, ingredients } = detail;
  return popup ? (
    <div className="absolute z-40 w-full h-full ">
      <div className={style["pop_up"]}>
        <div className="w-full h-full flex relative ">
          <form action=""></form>
          <div className="">
            <button
              className="button py-2 px-4"
              onClick={() => {
                setPopup(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
