import React, { useContext } from "react"
import { AppContext } from '../../context/AppContext'
import "./Mensaje.css"


export const Mensaje = () => {

    const { darkMode, gifs } = useContext(AppContext)


    return(
        <div className={`Conteiner ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
            <h3 className={`${gifs.length > 0 ? "none" : "block"}`}>
                Bienvenido utiliza la barra de
                <br></br> 
                busqueda  para buscar los GIFS!
            </h3>
        </div>
    )
}