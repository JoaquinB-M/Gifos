import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ImgLogoDesktopLighted from "./images/logo-desktop.svg";
import "./darkmode.css"


export const BtnDarkMode = () => {

    const { setDarkMode, darkMode } = useContext(AppContext)

    const handleDarkModeOff = () => {
        setDarkMode(true)
    }

    const handleDarkModeOn = () => {
        setDarkMode(false)
    }

    console.log(darkMode)

    return(
        <div className={`header ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
            <div className="icon_gifs">
                <img src={ImgLogoDesktopLighted} alt="logo"/>
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