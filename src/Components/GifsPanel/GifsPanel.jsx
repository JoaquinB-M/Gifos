import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import FadeLoader from "react-spinners/FadeLoader"
import "./gifsPanel.css";


export const GisfPanel = ({Gifsfetched}) => {


    const { gifs, darkMode } = useContext(AppContext)
    //const [numberGifs, setNumberGifs] = useState(0);

    const Gifslist = !Gifsfetched ? (gifs.map(result => (
        <img key={result.id} src={result.images.downsized.url} alt=""/>
        ))) : (
        <FadeLoader background-color="none" color="#572EE5" />
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