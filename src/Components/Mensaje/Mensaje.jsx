import React, { useContext } from "react"
import { AppContext } from '../../context/AppContext'
import "./Mensaje.css"


export const Mensaje = () => {

    const { darkMode, Gifsfetched } = useContext(AppContext)


    return(
        <div className={`Conteiner ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
            <h1 className={`${Gifsfetched === true ? "none" : "block"}`}>
                Bienvenido utiliza la barra de busqueda 
                <br></br> 
                para buscar los mejores GIFS!
            </h1>
        </div>
    )
}