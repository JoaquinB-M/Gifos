import React, { useContext } from 'react'
import { GisfPanel } from '../GifsPanel/GifsPanel'
import { AppContext } from '../../context/AppContext'
import "../SearchGifs/search.css"
import ImgIlustraHeader from './imagesSearch/ilustra_header.svg'
import ImgIconClose from './imagesSearch/times-solid.svg'
import ImgIconSearcg from './imagesSearch/icon-search-mod-noc.svg'

import AutoComplete from '../Autocomplete/AutoComplete.jsx'

export const Search = () => {
    const { query, setQuery, darkMode, isFetched, setIsFetched, setGifsFetched, gifs, setGifs, autoComplete } = useContext(AppContext)

    const setSearch = (event) => {
        setQuery(event.target.value)
    }

    const handleGifs = () => {
        setGifsFetched(true)
        setIsFetched(false)
    }

    const close = () => {
        setGifsFetched(false)
        setIsFetched(false)
        setGifs([])
        setQuery("")
    }

    const handleKeyDown = (event) => {
        event.key === 'Enter' ? handleGifs() : query.length === 0 ? close() : setIsFetched(true)
    }


    return (
        <div className={`conteiner ${darkMode === true ? "searchDark" : "searchLight"} bounce-in-top`}>
            <h1>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
            <img src={ImgIlustraHeader} alt="logo"/>
            <div className="container-input">
                <input onKeyUp={handleKeyDown} onChange={setSearch} placeholder="Busca GIFS!" type="text" value={query}/>
                <div onClick={handleGifs} className="logoSearch">
                    <img src={ImgIconSearcg} alt="logo-search" className="searchIcon"/>
                </div>
                <div onClick={close} className="logoClose">
                    <img src={ImgIconClose} alt="logo-search" className="searchIcon"/>
                </div>
            </div>
            <div className="autoCompleteContainer">
                {  (autoComplete.length !== 0 && isFetched === true) && <AutoComplete/>}
            </div>
    
            <h2>Busca los <span>GIFS</span>! que te gusten</h2>
            <div>
                { gifs.length !== 0 && <GisfPanel/>}
            </div>
        </div>
    )
} 