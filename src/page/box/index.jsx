import React from "react";
import img1 from "../../image/包車 1.svg";
import img2 from "../../image/帆船 1.svg";
import img3 from "../../image/山岳 1.svg";
import img4 from "../../image/瑜珈 1.svg";
import img5 from "../../image/截圖 2021-04-25 下午3.54 7.svg";

import "./style.scss";
function Box() {
  return (
    <>
      <div className="box">
        <div className="box__iteam">
          <img src={img1} alt="" />
          <span>包車</span>
        </div>
        <div className="box__iteam">
          <img src={img2} alt="" />
          <span>帆船</span>
        </div>
        <div className="box__iteam">
          <img src={img3} alt="" />
          <span>山岳</span>
        </div>
        <div className="box__iteam">
          <img src={img4} alt="" />
          <span>瑜珈</span>
        </div>
      </div>
      <div className="lg">
        <img src={img5} alt="" />
      </div>
    </>
  );
}

export default Box;
