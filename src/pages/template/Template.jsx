import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import style from "./template.module.css";
export default function Template() {

  return (
    <div className={style["main"]}>
      <Navigation />
      <Outlet />
    </div>
  );
}
