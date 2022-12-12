import React from "react";
import "./style.scss";
import medium from "../../image/截圖 2021-04-15 下午2.50 1.svg";
import img5 from "../../image/截圖 2021-04-25 下午3.54 7.svg";
import video from "../../image/影片區.svg";
import pink from "../../image/image 6.svg";

function Medium() {
  return (
    <>
      <div className="medium">
        <h1>-點選您要尋找的服務-</h1>
        <div className="medium__img">
          <img src={medium} alt="" />
        </div>
      </div>
      <div className="lg">
        <img src={img5} alt="" />
      </div>
      <div className="vd">
        <img src={video} alt="" />
      </div>
      <div className="pink">
        <img src={pink} alt="" />
      </div>
    </>
  );
}

export default Medium;
