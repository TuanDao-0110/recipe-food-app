import React from "react";
import style from "./template.module.css";
export default function Template() {
  return (
    <div className={style['main']}>
      <video src={require("../../img/video_bg.mp4")}  autoPlay loop muted />
    </div>
  );
}
