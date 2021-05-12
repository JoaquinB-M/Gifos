import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../context/AppContext'
import './AutoComplete.css'

export default function AutoComplete({isFetched, setIsFetched, setGifsFetched}) {
  const { autoComplete, setAutoComplete, Gifos, query, setQuery } = useContext(AppContext)
  
  const handleOptions = (result) => {
    setQuery(result)
    setGifsFetched(true)
    document.getElementById("lista").style.display = "none"
  }

  useEffect(()=>{
    const updateAutoComplete = async() => {
      const data = await Gifos.getAutoComplete(query)
      setAutoComplete(data)
      setIsFetched(true)
    }
    
    !isFetched && query.length && updateAutoComplete() 
  }, [query, autoComplete, isFetched, setAutoComplete, setIsFetched, Gifos])

  const list = isFetched ? (autoComplete.data.map((result, index) => (
    <li key={index} onClick={() => handleOptions(result.name)} >{result.name}</li>
  ))) : (
    <div>Cargando...</div>
  )

  return (
    <div className="AutoComplete" id="lista">
      {list}
    </div>
  )
}
