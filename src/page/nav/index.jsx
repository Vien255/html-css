import React from "react";
import "./style.scss";
import logo from "../../image/橫式LOGO_工作區域 1 1.svg";
import menu from "../../image/Circled Menu.svg";
import profile from "../../image/Profile 1.svg";
import imgmenu from "../../image/Vector.svg";
import bus from "../../image/Bus.svg";
import pli from "../../image/Pilates.svg";
import land from "../../image/Landscape.svg";
import beach from "../../image/Beach.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav__list">
        <div className="nav__list-item">
          <img src={menu} alt="" />
          服務
        </div>
        <div className="nav__list-item">專欄文章</div>
        <div className="nav__list-item">English (us)</div>
        <div className="nav__list-profile">
          <img src={profile} alt="" />
        </div>
        <div className="nav__list-menu">
          <img src={imgmenu} alt="" />
          <div class="dropdown-content">
            <a>
              <img src={bus} alt="" />
              <span>包車</span>
            </a>
            <a>
              <img src={land} alt="" />
              <span>帆船</span>
            </a>
            <a>
              <img src={beach} alt="" />
              <span>山岳</span>
            </a>
            <a>
              <img src={pli} alt="" />
              <span>瑜珈</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
