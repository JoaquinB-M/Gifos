import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ImgLogoDesktopLighted from "./images/logo-desktop.svg";
import ImgLogoDesktopDark from "./images/logo-mobile-modo-noct.svg"
import "./darkmode.css"


export const BtnDarkMode = () => {

    const { setDarkMode, darkMode } = useContext(AppContext)

    const handleDarkModeOff = () => {
        setDarkMode(true)
    }

    const handleDarkModeOn = () => {
        setDarkMode(false)
    }


    return(
        <div className={`header ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
            <div className="icon_gifs">
                <img src={`${darkMode === true ? ImgLogoDesktopDark : ImgLogoDesktopLighted}`} alt="logo"/>
            </div>
            { darkMode === false ?
                <div>
                    <button onClick={handleDarkModeOff} className="dark_button_off">
                        MODO DARK
                    </button>
                </div>
                :
                <div>
                    <button onClick={handleDarkModeOn} className="dark_button_on">
                        MODO LIGHT
                    </button>
                </div>
            }
        </div>
    )
}