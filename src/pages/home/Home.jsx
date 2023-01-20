import React from "react";
import MainText from "../main-text/MainText";
import style from "./home.module.css";
export default function Home() {
  return (
    <div className={style["main"]}>
      <video src={require("../../img/video_bg.mp4")} autoPlay loop muted />
      <MainText />
    </div>
  );
}
