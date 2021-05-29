import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import FadeLoader from "react-spinners/FadeLoader"
import "./gifsPanel.css";


export const GisfPanel = () => {


    const { gifs, darkMode, Gifsfetched } = useContext(AppContext)


    const Gifslist = Gifsfetched ? (
            <FadeLoader background-color="none" color="#572EE5" />
        ) : (gifs.map(result => (
            <img key={result.id} src={result.images.downsized.url} alt=""/>
        ))
    )
    
    return(
        <div>
            <div className={`container_gifs_panel ${darkMode === true ? "darkModeOn" : "darkModeOff"}`}>
                <div className="container_gifs">
                    {Gifslist}
                </div>
            </div>
        </div>
    )
}