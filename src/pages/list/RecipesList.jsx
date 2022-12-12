import React from "react";
import CardFood from "../../card-food/CardFood";
import style from "./recipeslist.module.css";
export default function RecipesList() {
    
  return (
    <div className="main">
      <div className="h-screen">
        <h1 className="text-center text-6xl font-semibold">List card</h1>
        <div className="flex flex-wrap gap-2 mt-5 justify-center h-full ">
          <CardFood></CardFood>
          <CardFood></CardFood>
          <CardFood></CardFood>
          <CardFood></CardFood>
          <CardFood></CardFood>
          <CardFood></CardFood>
          <CardFood></CardFood>

        </div>
      </div>
    </div>
  );
}
