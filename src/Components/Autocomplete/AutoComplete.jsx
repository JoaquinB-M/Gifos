import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import './AutoComplete.css'

export default function AutoComplete({isFetched, setGifsFetched}) {
  const { autoComplete,  setQuery, setIsFetched } = useContext(AppContext)
  
  const handleOptions = (result) => {
    setQuery(result)
    setGifsFetched(true)
    setIsFetched(false)
  }



  const list = isFetched ? (autoComplete.data.map((result, index) => (
    <li key={index} onClick={() => handleOptions(result.name)} >{result.name}</li>
  ))) : (
    <div>Cargando...</div>
  )

  return (
    <div className="AutoComplete">
      {list}
    </div>
  )
}
