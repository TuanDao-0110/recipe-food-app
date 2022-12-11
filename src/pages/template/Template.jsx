import React from "react";
import MainText from "../main-text/MainText";
import Navigation from "../navigation/Navigation";
import style from "./template.module.css";
export default function Template() {
  return (
    <div className={style["main"]}>
      <Navigation />
      {/* <video src={require("../../img/video_bg.mp4")} autoPlay loop muted /> */}
      <MainText />
    </div>
  );
}
