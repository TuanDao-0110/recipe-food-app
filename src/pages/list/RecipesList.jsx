import React, { useEffect, useState } from "react";
import CardFood from "../../card-food/CardFood";
import FoodDetails from "../../popup/FoodDetails";
import { hanldeGetAllRecipe } from "../../service/sevices";
import style from "./recipeslist.module.css";
const selectList = ["name", "author", "country"];
export default function RecipesList() {
  const [defaultState, setDefaulState] = useState();
  const [state, setState] = useState();
  const [load, setLoad] = useState(3);
  const [popup, setPopup] = useState(false);
  const [detail, setDetail] = useState({});
  const [selectType, setSelectType] = useState("");
  useEffect(() => {
    hanldeGetAllRecipe()
      .then((data) => {
        setDefaulState(data);
        setState(data);
      })
      .catch(console.log());
  }, []);
  const handleSearch = (value) => {
    if (!value) {
      setState(defaultState);
    } else {
      let temp = [];
      defaultState.forEach((item) => {
        if (item[selectType].toLowerCase().includes(value.toLowerCase())) {
          temp.push(item);
        }
      });
      setState(temp);
    }
  };

  return (
    <div className="main">
      <div className="h-full">
        <h1 className="text-center text-6xl font-semibold">Total Food Recipes: {state?.length}</h1>
        <div className="w-4/5 m-auto flex justify-between my-5 gap-3">
          <input
            type="text"
            className="w-3/4 text-3xl"
            placeholder="find food name"
            disabled={selectType === "" ? true : false}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <div className="flex flex-wrap items-center justify-center  gap-1">
            <h1 className="w-full text-center text-red-50 font-bold">select type to search </h1>
            <select
              name="type"
              id="type"
              className="w-full"
              onChange={(e) => {
                setSelectType(e.target.value);
              }}
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              {selectList.map((item, index) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 justify-center h-full relative">
          <FoodDetails popup={popup} load={load} setPopup={setPopup} detail={detail} />
          {state?.slice(0, load).map((item, key) => {
            return <CardFood key={key} item={item} setPopup={setPopup} setDetail={setDetail}></CardFood>;
          })}
        </div>
        <div className="flex justify-center mt-10 cursor-pointer">
          <button
            className="button py-2 px-5"
            onClick={() => {
              setLoad(load + 3);
            }}
          >
            <span class="material-symbols-outlined">expand_more load {`more`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
