import React, { useState } from "react";
import style from "./addrecipe.module.css";

export default function AddRecipe() {
  const [newRecipes, setNewRecipes] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    ingredients: [
      {
        name: "",
        quantity: "",
        unit: "",
      },
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ],
    preparation_time: "",
    cooking_time: "",
    servings: "",
    directions: ["", "", ""],
    nutrition: {
      calories: 900,
      fat: 60,
      carbohydrates: 60,
      protein: 30,
    },
  });
  const addMoreIngredients = () => {
    let temp = [...newRecipes.ingredients];
    temp.push({
      name: "",
      quantity: "",
      unit: "",
    });
    setNewRecipes({ ...newRecipes, ingredients: temp });
  };
  const addMoreDirection = () => {
    let temp = [...newRecipes.directions];
    temp.push("");
    setNewRecipes({ ...newRecipes, directions: temp });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const render = () => {
    let render = [];
    for (let i in newRecipes) {
      if (typeof newRecipes[i] === "string") {
        render.push(
          <div className="w-full flex justify-between">
            <label htmlFor={`${i}`} className="">
              {i}
            </label>
            <input type="text" id={i} name={i} value={newRecipes[i]} className="w-3/4" />
          </div>
        );
      }
      if (i === "nutrition") {
        render.push(
          <div className="w-full flex">
            <p className="w">{i}</p>
            <div className="w-2/3 flex  items-center gap-5 flex-wrap">
              <label htmlFor={newRecipes[i]["calories"]}> calories</label>
              <input type="number" id={newRecipes[i]["calories"]} name={newRecipes[i]["calories"]} value={newRecipes[i]["calories"]} />
              
            </div>
          </div>
        );
      }
      if (i === "ingredients") {
        render.push(
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <p className="">{i}</p>
            <div className="w-2/3 flex  items-center gap-5 flex-wrap ">
              {newRecipes[i]?.map((item, index) => {
                return (
                  <div className="w-full flex  items-center gap-5 " key={index}>
                    <label htmlFor={`${item["name"]}`}>name</label>
                    <input type="text" name={`${item["name"]}`} id={`${item["name"]}`} value={`${item["name"]}`} className="w-2/5" />
                    <label htmlFor={`${item["quantity"]}`}>quantity</label>
                    <input type="text" name={`${item["quantity"]}`} id={`${item["quantity"]}`} value={`${item["quantity"]}`} className="w-2/5" />
                    <label htmlFor={`${item["unit"]}`}>unit</label>
                    <input type="text" name={`${item["unit"]}`} id={`${item["unit"]}`} value={`${item["unit"]}`} className="w-2/5" />
                  </div>
                );
              })}
              <div className="w-full flex justify-end">
                <button className="button px-4">more ingredients +</button>
              </div>
            </div>
          </div>
        );
      }
      if (i === "directions") {
        render.push(
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <p className="">{i}</p>
            <div className="w-2/3 flex  items-center gap-5 flex-wrap ">
              {newRecipes[i].map((item, index) => {
                return (
                  <div className="w-full justify-end flex gap-5" key={index}>
                    <label htmlFor={`step${index}`}>step {index + 1}</label>
                    <input type="text" name={`step${index}`} id={`step${index}`} className="w-2/3" value={item} />
                  </div>
                );
              })}
            </div>

            <div className="w-full flex justify-end">
              <button className="button px-4">more step +</button>
            </div>
          </div>
        );
      }
    }
    return render;
  };
  return (
    <div className="main">
      <div className="h-full">
        <h1 className="text-center text-6xl font-semibold pb-10">add recipes</h1>
        <form
          action=""
          className="w-3/5 m-auto flex flex-wrap gap-5 "
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {render()}
        </form>
      </div>
    </div>
  );
}
