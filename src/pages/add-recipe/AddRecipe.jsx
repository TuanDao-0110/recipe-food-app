import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetAllCoutriesInfo, handlePostNewRecipe, hanldeGetAllRecipe } from "../../service/sevices";
import style from "./addrecipe.module.css";

export default function AddRecipe() {
  const navigate = useNavigate();
  const [newRecipes, setNewRecipes] = useState({
    id: 1,
    name: "",
    author: "",
    country: "",
    description: "",
    image: "",
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
  const [countries, setCountries] = useState([
    {
      name: "Mauritania",
      flag: "🇲🇷",
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
    },
  ]);
  const findBiggestId = (data) => {
    let temp = [];
    data.map((item, index) => {
      temp.push(item.id);
    });
    temp.sort((a, b) => b - a);
    return temp[0];
  };
  useEffect(() => {
    handleGetAllCoutriesInfo()
      .then((data) => {
        let newCountries = [];
        data.map((item, index) => {
          const name = item.name.common;
          const flag = item.flag;
          let temp = { name, flag };
          newCountries.push(temp);
        });

        setCountries(newCountries);
      })
      .catch(console.log());
    hanldeGetAllRecipe()
      .then((data) => {
        let newId = findBiggestId(data) + 1;
        setNewRecipes({ ...newRecipes, id: newId });
      })
      .catch(console.log());
  }, []);
  const addMoreIngredients = () => {
    let temp = [...newRecipes.ingredients];
    temp.push({
      name: "",
      quantity: "",
      unit: "",
    });
    setNewRecipes({ ...newRecipes, ingredients: temp });
  };
  const removeIngredients = () => {
    let temp = [...newRecipes.ingredients];
    temp.pop();
    setNewRecipes({ ...newRecipes, ingredients: temp });
  };
  const addMoreDirection = () => {
    let temp = [...newRecipes.directions];
    temp.push("");
    setNewRecipes({ ...newRecipes, directions: temp });
  };
  const removeDirection = () => {
    let temp = [...newRecipes.directions];
    temp.pop();
    setNewRecipes({ ...newRecipes, directions: temp });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newRecipes);
    handlePostNewRecipe(newRecipes, navigate);
  };
  const render = () => {
    let render = [];
    for (let i in newRecipes) {
      if (typeof newRecipes[i] === "string" && i !== "country" && i !== "description") {
        render.push(
          <div className="w-full flex justify-between items-center">
            <label htmlFor={`${i}`} className="text-xl text-green-400 font-bold">
              {i}
            </label>
            <input
              required
              type="text"
              id={i}
              placeholder={i}
              name={i}
              value={newRecipes[i]}
              className="w-3/4"
              onChange={(e) => {
                let temp = { ...newRecipes };
                temp[i] = e.target.value;
                setNewRecipes({ ...temp });
              }}
            />
          </div>
        );
      }
      if (i === "country") {
        render.push(
          <div className="w-full flex justify-between items-center">
            <label htmlFor={`${i}`} className="text-xl text-green-400 font-bold">
              {i}
            </label>
            <select
              className="w-3/4"
              id={i}
              name={i}
              onChange={(e) => {
                let temp = { ...newRecipes };
                temp[i] = e.target.value;
                setNewRecipes({ ...temp });
              }}
            >
              {countries.map((item, index) => {
                return (
                  <option className="" value={item.name} key={index}>
                    <span>{item.name}</span> ---
                    <span>{item.flag}</span>
                  </option>
                );
              })}
            </select>
          </div>
        );
      }
      if (i === "description") {
        render.push(
          <div className="w-full flex justify-between items-center">
            <label htmlFor={`${i}`} className="text-xl text-green-400 font-bold">
              {i}
            </label>
            <textarea
              required
              type="text"
              id={i}
              name={i}
              value={newRecipes[i]}
              className="w-3/4"
              onChange={(e) => {
                let temp = { ...newRecipes };
                temp[i] = e.target.value;
                setNewRecipes({ ...temp });
              }}
            />
          </div>
        );
      }
      if (i === "nutrition") {
        render.push(
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <label className="text-xl text-green-400 font-bold">{i}</label>
            <div className="w-2/3 flex  items-center justify-between gap-5 flex-wrap ">
              <div className="flex w-full justify-between">
                <label htmlFor={newRecipes[i]["calories"]} className="">
                  calories
                </label>
                <input
                  required
                  type="number"
                  id={newRecipes[i]["calories"]}
                  name={newRecipes[i]["calories"]}
                  value={newRecipes[i]["calories"]}
                  className="w-2/3"
                  onChange={(e) => {
                    let temp = { ...newRecipes[i] };
                    temp["calories"] = Number(e.target.value);
                    setNewRecipes({ ...newRecipes, nutrition: temp });
                  }}
                />
              </div>
              <div className="flex w-full justify-between">
                <label htmlFor={newRecipes[i]["carbohydrates"]}> carbohydrates</label>
                <input
                  required
                  type="number"
                  id={newRecipes[i]["carbohydrates"]}
                  name={newRecipes[i]["carbohydrates"]}
                  value={newRecipes[i]["carbohydrates"]}
                  className="w-2/3"
                  onChange={(e) => {
                    let temp = { ...newRecipes[i] };
                    temp["carbohydrates"] = Number(e.target.value);
                    setNewRecipes({ ...newRecipes, nutrition: temp });
                  }}
                />
              </div>
              <div className="flex w-full justify-between">
                <label htmlFor={newRecipes[i]["fat"]} className="">
                  fat
                </label>
                <input
                  required
                  type="number"
                  id={newRecipes[i]["fat"]}
                  name={newRecipes[i]["fat"]}
                  value={newRecipes[i]["fat"]}
                  className="w-2/3"
                  onChange={(e) => {
                    let temp = { ...newRecipes[i] };
                    temp["fat"] = Number(e.target.value);
                    setNewRecipes({ ...newRecipes, nutrition: temp });
                  }}
                />
              </div>
              <div className="flex w-full justify-between">
                <label htmlFor={newRecipes[i]["protein"]} className="">
                  protein
                </label>
                <input
                  required
                  type="number"
                  id={newRecipes[i]["protein"]}
                  name={newRecipes[i]["protein"]}
                  value={newRecipes[i]["protein"]}
                  className="w-2/3"
                  onChange={(e) => {
                    let temp = { ...newRecipes[i] };
                    temp["protein"] = Number(e.target.value);
                    setNewRecipes({ ...newRecipes, nutrition: temp });
                  }}
                />
              </div>
            </div>
          </div>
        );
      }
      if (i === "ingredients") {
        render.push(
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <label className="text-xl text-green-400 font-bold">{i}</label>
            <div className="w-4/5 flex  items-center gap-5 flex-wrap ">
              {newRecipes[i]?.map((item, index) => {
                return (
                  <div className="w-full flex items-center justify-end gap-2 " key={index}>
                    <label htmlFor={`${item["name"]}`}>name</label>
                    <input
                      required
                      type="text"
                      name={`${item["name"]}`}
                      id={`${item["name"]}`}
                      value={`${item["name"]}`}
                      className="w-fit"
                      onChange={(e) => {
                        let temp = newRecipes["ingredients"];
                        temp[index]["name"] = e.target.value;
                        setNewRecipes({ ...newRecipes, ingredients: temp });
                      }}
                    />
                    <label htmlFor={`${item["quantity"]}`}>quantity</label>
                    <input
                      required
                      type="number"
                      name={`${item["quantity"]}`}
                      id={`${item["quantity"]}`}
                      value={`${item["quantity"]}`}
                      className="w-20"
                      onChange={(e) => {
                        let temp = newRecipes["ingredients"];
                        temp[index]["quantity"] = Number(e.target.value);
                        setNewRecipes({ ...newRecipes, ingredients: temp });
                      }}
                    />
                    <label htmlFor={`${item["unit"]}`}>unit</label>
                    <input
                      required
                      type="text"
                      name={`${item["unit"]}`}
                      id={`${item["unit"]}`}
                      value={`${item["unit"]}`}
                      className="w-20"
                      onChange={(e) => {
                        let temp = newRecipes["ingredients"];
                        temp[index]["unit"] = e.target.value;
                        setNewRecipes({ ...newRecipes, ingredients: temp });
                      }}
                    />
                  </div>
                );
              })}
              <div className="w-full flex justify-end gap-5">
                <div
                  className="button px-4"
                  onClick={() => {
                    addMoreIngredients();
                  }}
                >
                  more ingredients +
                </div>
                <div
                  className="button_red px-4"
                  onClick={() => {
                    removeIngredients();
                  }}
                >
                  remove ingredients -
                </div>
              </div>
            </div>
          </div>
        );
      }
      if (i === "directions") {
        render.push(
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <label className="text-xl text-green-400 font-bold">{i}</label>
            <div className="w-2/3 flex  items-center gap-5 flex-wrap ">
              {newRecipes[i].map((item, index) => {
                return (
                  <div className="w-full justify-end flex gap-5 items-center" key={index}>
                    <label htmlFor={`step${index}`}>step {index + 1}</label>
                    <input
                      type="text"
                      name={`step${index}`}
                      id={`step${index}`}
                      className="w-2/3"
                      value={item}
                      onChange={(e) => {
                        let temp = newRecipes["directions"];
                        temp[index] = e.target.value;
                        setNewRecipes({ ...newRecipes, directions: temp });
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="w-full flex justify-end gap-5">
              <div
                className="button px-4"
                onClick={() => {
                  addMoreDirection();
                }}
              >
                more step +
              </div>
              <div
                className="button_red px-4"
                onClick={() => {
                  removeDirection();
                }}
              >
                remove step -
              </div>
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
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
          className="w-4/5 m-auto flex flex-wrap gap-10  "
        >
          {render()}
          <div className="w-full flex justify-end">
            <button className="button_red px-4 py-2" type="submit">
              submit new recipes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
