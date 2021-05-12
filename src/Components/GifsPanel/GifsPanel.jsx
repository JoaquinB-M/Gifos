import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../context/AppContext'
import "./gifsPanel.css";


export const GisfPanel = ({Gifsfetched, setGifsFetched}) => {
    const { gifs, setGifs, Gifos, query } = useContext(AppContext)
    //const [numberGifs, setNumberGifs] = useState(0);

    useEffect(()=>{
        const getGifos = async() => {
            const data = await Gifos.getGifs(query)
            setGifs(data.data)
            setGifsFetched(false)
        }
        Gifsfetched && getGifos()
    }, [Gifos, Gifsfetched, query, setGifs, setGifsFetched])

    const Gifslist = !Gifsfetched ? (gifs.map(result => (
        <img key={result.id} src={result.images.downsized.url} alt=""/>
    ))) : (
        <div>Cargando...</div>
    )

    return(
        <div>
            <div className="container_gifs_panel">
                <div className="container_gifs">
                    {Gifslist}
                </div>
            </div>
        </div>
    )
}