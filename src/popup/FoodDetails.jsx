import React, { useState } from "react";
import { GET_IN, GET_OUT } from "../service/ultilities";
import style from "./fooddetails.module.css";
export default function FoodDetails({ popup, setPopup, detail }) {
  const { name, author, country, description, image, ingredients, directions, nutrition, servings, cooking_time, preparation_time } = detail;
  const [show, setShow] = useState(GET_IN);
  const render = () => {
    let render = [];
  };
  return popup ? (
    <div className={`absolute z-40 w-full h-full ${show}`}>
      <div className={style["pop_up"]}>
        <div className="w-full h-full flex flex-wrap justify-center relative">
          <h1 className="w-full">
            {name} by {author}
          </h1>
          <form action="" className="flex flex-wrap ">
            <label htmlFor="country" className="w-1/4">
              country
            </label>
            <input type="text" value={country} readOnly className="w-3/4" id="country" name="country" />
          </form>
          <div className="absolute right-4 top-4">
            <button
              className="button py-2 px-4"
              onClick={() => {
                setTimeout(() => {
                  setPopup(false);
                }, 400);
                setShow(GET_OUT);
                setTimeout(() => {
                  setShow(GET_IN);
                }, 500);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
