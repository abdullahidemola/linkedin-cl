import React from "react";
import "./headerOption.css";

function HeaderOption({ Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="headerOption_tile">{title}</h3>
    </div>
  );
}

export default HeaderOption;
