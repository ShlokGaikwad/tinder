import React from "react";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header_logo"
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tinder-icon.png"
        alt="logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
