import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './AutoComplete.css'

export default function AutoComplete({isFetched, setIsFetched, setGifsFetched, Gifsfetched}) {
  const { autoComplete,  setQuery } = useContext(AppContext)
  
  const handleOptions = (result) => {
    setQuery(result)
    setGifsFetched(true)

    document.getElementById("lista").style.display = "none"
  }



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
