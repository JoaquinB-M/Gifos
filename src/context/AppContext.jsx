import { useState, createContext } from 'react'
import Gifos from '../lib/api' 

export const AppContext = createContext()

export const AppProvider = props => {
    const [data, setData] = useState([])
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState("");
    const [autoComplete, setAutoComplete] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [Gifsfetched, setGifsFetched] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <AppContext.Provider value={{data, setData, Gifos, autoComplete, setAutoComplete, gifs, 
        setGifs, query, setQuery, darkMode, setDarkMode, isFetched, setIsFetched, Gifsfetched, setGifsFetched}}>
            {props.children}
        </AppContext.Provider>
    )
}