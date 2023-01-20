import React, {  useState } from "react";
import { GET_IN, GET_OUT } from "../service/ultilities";
import style from "./fooddetails.module.css";
export default function FoodDetails({ popup, setPopup, detail, screenY }) {
  const { name, author, country, description, ingredients, directions, servings, cooking_time, preparation_time } = detail;
  const [show, setShow] = useState(GET_IN);

  return popup ? (
    <div className={`absolute z-40 w-full  ${show} flex flex-col items-center `} style={{ top: `${screenY-500}px` }}>
      <div className={style["pop_up"]}>
        <div className="w-full h-full flex flex-wrap justify-center relative">
          <h1 className="w-full label text-center py-10">
            <span className="text-red-300">{name} -</span>
            by <span className="text-red-300">- {author}</span>
          </h1>
          <form action="" className="flex flex-col gap-5 mb-5 w-full m-auto justify-center items-center ">
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                country:
              </h3>
              <p className="">{country}</p>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                cooking time:
              </h3>
              <p className="">{cooking_time} mins</p>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                preparation time:
              </h3>
              <p className="">{preparation_time} mins</p>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                servings:
              </h3>
              <p className="">{servings} people</p>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                description:
              </h3>
              <p className="w-2/3 text-justify">{description} </p>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                ingredients:
              </h3>
              <table className="w-4/6 text-left">
                <thead className="text-red-300">
                  <tr>
                    <th>name</th>
                    <th>quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>
                <tbody className="text-green-100 text-sm">
                  {ingredients?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3">
              <h3 htmlFor="country" className="label">
                Cooking step:
              </h3>
              <div className="flex flex-col gap-2 w-2/3">
                {directions?.map((item, index) => {
                  return (
                    <p className="text-sm" key={index}>
                      {" "}
                      <span className="text-red-300">{`step ${index + 1}`}</span>
                      {`: ${item}`}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="gap-3 flex m-auto justify-between w-2/3"></div>
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
