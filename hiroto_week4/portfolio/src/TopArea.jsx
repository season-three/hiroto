import React, { useState } from "react";
import Visual from "./Visual";

const TopArea = (prots) => {
  return (
    <div className="top-area">
      <div className="top-border-anim01"></div>
      <div className="top-border-anim02"></div>

      <div className="top-about">
        <h1 className="myname">Hiroto Ito</h1>
        <h2 className="about_me">About me></h2>
      </div>
    </div>
  );
};

export default TopArea;
