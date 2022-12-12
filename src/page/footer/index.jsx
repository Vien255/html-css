import React from "react";
import logo from "../../image/白字_橫式LOGO_工作區域 1 2.svg";
import bank from "../../image/截圖 2021-04-25 下午12.51 1.svg";
import "./style.scss";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={logo} alt="" />
        <div className="footer__left-item">
          真心國際旅行社有限公司(橘子貓TTtrips)
        </div>
        <div className="footer__left-item ">甲種旅行社 統一編號 47072308</div>
        <div className="footer__left-item vl">
          服務據點：116 台北市文山區羅斯福路6段107號
        </div>
        <div className="footer__left-item">
          電話：0919266232 傳真：02-29343589
        </div>
        <div className="footer__left-item">客服信箱 : service@tttrips.com</div>
      </div>
      <div className="footer__right">
        <div>
          <button className="bt">出團總表 </button>
          <button className="bt">聯絡我們 </button>
        </div>
        <div className="image">
          <img src={bank} alt="" />
        </div>
        <span>Copyright © 2021 TTtrips. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
