import React from "react";
import MainText from "../main-text/MainText";

export default function Home() {
  return (
    <div className="">
      <video src={require("../../img/video_bg.mp4")} autoPlay loop muted />
      <MainText />
    </div>
  );
}
