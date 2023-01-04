import React from "react";
import "./Header.css";
import DarkMode from "./DarkMode"



function Header () {


    return (
        <div id="header" >
            Maintenance Manager v0.1
            <div id="darkModeButtonDiv">
                <DarkMode />
            </div>
        </div>
    )


}

export default Header