import React from "react";
import "../Styles/menu.css";
import MenuButton from "./MenuButton";
import "../images/level.svg";
import "../images/score.svg";
import "../images/settings.svg";

export default function Menu() {
    
    return(
        <div className="menu">
            <MenuButton/>
        </div>
    );
}