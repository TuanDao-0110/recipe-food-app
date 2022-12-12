import React, { useEffect, useState } from "react";
import CardFood from "../../card-food/CardFood";
import { hanldeGetAllRecipe } from "../../service/sevices";
import style from "./recipeslist.module.css";
export default function RecipesList() {
  const [state, setState] = useState();
  const [load, setLoad] = useState(3);
  useEffect(() => {
    hanldeGetAllRecipe()
      .then((data) => setState(data))
      .catch(console.log());
  }, []);

  return (
    <div className="main">
      <div className="h-full">
        <h1 className="text-center text-6xl font-semibold">Total Food Recipes: {state?.length}</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center h-full ">
          {state?.slice(0, load).map((item, key) => {
            return <CardFood key={key} item={item}></CardFood>;
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
