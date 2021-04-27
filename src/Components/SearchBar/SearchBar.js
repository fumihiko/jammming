import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

const SearchBar = (props) => {

  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    if(event.target.value !== undefined || event.target.value !== null || event.target.value !== ''){
      setTerm(event.target.value)
    }
  }

  const handleSearch = (event) => {
    event.preventDefault()
    props.onSearch(term)
  }
  

   return (
      <form className="SearchBar">
        <label htmlFor="term">
          <input placeholder="Enter A Song, Album, or Artist" 
                onChange={handleChange}
                onBlur={handleSearch}
                id="term" /></label>
        <button type="submit" className="SearchButton" onClick={handleSearch} ><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    )
  
  
}

export default SearchBar
