import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./gifsPanel.css";


export const GisfPanel = ({Gifsfetched, setGifsFetched}) => {
    const { gifs, darkMode } = useContext(AppContext)
    //const [numberGifs, setNumberGifs] = useState(0);

    const Gifslist = !Gifsfetched ? (gifs.map(result => (
        <img key={result.id} src={result.images.downsized.url} alt=""/>
    ))) : (
        <div>Cargando...</div>
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