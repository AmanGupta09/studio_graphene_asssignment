import React from "react";
import "./Header.css";
import truck from "../../assets/Svg/truck.svg";
import fb from "../../assets/Svg/fb.svg";
import linkedin from "../../assets/Svg/linkedin.svg";
import twitter from "../../assets/Svg/twitter.svg";
import insta from "../../assets/Svg/insta.svg";
const Header = () => {
  return (
    <div className="header">
      <span className="headerLeft">
        <span>
          <img className="img" src={truck} alt="truck" />
          Free Delivey
        </span>
        <div style={{ width: "1px", height: "19px", background: "#626262" }}></div>
        <span>Return Policy</span>
      </span>

      <span className="headerRight">
        <span> Login </span>
        <span style={{ margin: "0 14px 0 35px" }} id="follow"> Follow us </span>
        <span>
          <img className="img" src={fb} alt="fb" />
          <img className="img" src={linkedin} alt="linkedin" />
          <img className="img" src={twitter} alt="twitter" />
          <img className="img" src={insta} alt="insta" />
        </span>
      </span>
    </div>
  );
};

export default Header;
