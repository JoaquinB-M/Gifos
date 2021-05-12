import React from 'react'

import ImgLogoDesktopLighted from "./images/logo-desktop.svg";
import "./darkmode.css"

export const BtnDarkMode = () => {
    return(
        <div className="header">
            <div className="icon_gifs">
                <img src={ImgLogoDesktopLighted} alt="logo"/>
            </div>
            <div>
                <button className="dark_button">
                    MODO DARK
                </button>
            </div>
        </div>
    )
}