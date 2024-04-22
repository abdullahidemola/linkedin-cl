import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Home, LinkedIn, SupervisorAccount } from "@mui/icons-material";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="img_icon">
          <LinkedIn fontSize="large" />
        </div>

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={Home} title="home" />
        <HeaderOption Icon={SupervisorAccount} title="My network"/>
      </div>
    </div>
  );
}

export default Header;
