import React from "react";
import "./style.scss";
import img from "../../image/banner 1.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left">
          <div>
            <h1>
              誠摯邀你一起成為我
              <br /> 們遊山玩水的夥伴
            </h1>
            <span> 橘子貓帶大家「心靈上享受真正的大自然」</span>
          </div>
          <br />
          <input type="text" placeholder="請輸入您要尋找的活動" />
        </div>
        <div className="hero__right">
          <img src={img} alt="" />
        </div>
      </div>
      <h1>-點選您要尋找的服務-</h1>
    </>
  );
}

export default Hero;
