import { useState, createContext, useEffect } from 'react'
import Gifos from '../lib/api' 

export const AppContext = createContext()

export const AppProvider = props => {
    const [gifs, setGifs] = useState([])
    const [query, setQuery] = useState("")
    const [autoComplete, setAutoComplete] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [Gifsfetched, setGifsFetched] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(()=>{
        const updateAutoComplete = async() => {
          const data = await Gifos.getAutoComplete(query)
          setAutoComplete(data)
        }

        query.length && updateAutoComplete() 
      }, [ query, setAutoComplete ])

    useEffect(()=>{
        const getGifos = async() => {
            try {
                const data = await Gifos.getGifs(query)
                setGifs(data.data)
                setGifsFetched(false)
                data.data.length === 0 && query.length > 0 && alert('no se encontraron resultados :( , prueba otra busqueda') 
            } catch (error) {
                alert( " Algo salio mal :( " )
            }
        }
        Gifsfetched && getGifos()
    }, [Gifsfetched, query, setGifs, setGifsFetched])

    return (
        <AppContext.Provider value={{Gifos, autoComplete, setAutoComplete, gifs, 
        setGifs, query, setQuery, darkMode, setDarkMode, isFetched, setIsFetched, Gifsfetched, setGifsFetched}}>
            {props.children}
        </AppContext.Provider>
    )
}