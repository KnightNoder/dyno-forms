import { React } from "react";
import "../css/Header.css";
const Header = ({ bannerHeader, bannerSubText, bannerImageSrc, src }) => {
  return (
    <div className="header-block">
      <div className="heading">{bannerHeader}</div>

      <div className="header-text">{bannerSubText}</div>
      {src}
      <div>
        <img className="img-doctor" src={bannerImageSrc} alt="" />
      </div>
    </div>
  );
};

export default Header;
