import React, { useState, useContext } from 'react'
import { GisfPanel } from '../GifsPanel/GifsPanel'
import { AppContext } from '../../context/AppContext'
import "../SearchGifs/search.css"
import ImgIlustraHeader from './imagesSearch/ilustra_header.svg'
// import ImgIconSearchDark from './imagesSearch/icon-search.svg'
import ImgIconSearcg from './imagesSearch/icon-search-mod-noc.svg'

import AutoComplete from '../Autocomplete/AutoComplete.jsx'

export const Search = () => {
    const { query, setQuery } = useContext(AppContext)
    const [isFetched, setIsFetched] = useState(false)
    const [Gifsfetched, setGifsFetched] = useState(false)

    const setSearch = (event) => {
        setQuery(event.target.value);
        query.length && setIsFetched(false)
    }

    const handleGifs = () => {
        setGifsFetched(true)
    }


    return (
        <div className="conteiner">
            <h1>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
            <img src={ImgIlustraHeader} alt="logo"/>
            <div className="container-input">
                <input onChange={setSearch} placeholder="Busca GIFS!" type="text" value={query}/>
                <div onClick={handleGifs} className="logo">
                    <img src={ImgIconSearcg} alt="logo-search"/>
                </div>
            </div>
            <div className="autoCompleteContainer">
                {  query.length !== 0 && <AutoComplete {...{isFetched, setIsFetched, setGifsFetched, Gifsfetched}} />}
            </div>
    
            <h2>Busca los <span>GIFS</span>! que te gusten</h2>
            <div>
                { query.length !== 0 && <GisfPanel {...{Gifsfetched, setGifsFetched}}/>}
            </div>
        </div>
    )
} 