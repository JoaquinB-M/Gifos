import React, { useContext } from "react"
import { AppContext } from '../../context/AppContext'
import "./Mensaje.css"


export const Mensaje = () => {

    const { darkMode } = useContext(AppContext)


    return(
        <div className={`Conteiner ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
            <h3>
                Bienvenido utiliza la barra de
                <br></br> 
                busqueda  para buscar los GIFS!
            </h3>
        </div>
    )
}