import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => (
  <div key={country.numericCode}>
    <h2>{country.name}</h2>
    <p>capital {country.capital}</p>
    <h3>languages</h3>
    <ul>
      {
        country.languages.map(language => 
          <li key={language.iso639_1}>{language.name}</li>
        )
      }
    </ul>
    <br />
    <div>
      <img 
        src={
          "https://restcountries.eu/data/" 
          + country.alpha3Code.toLowerCase() 
          + ".svg"
        }
        alt={country.alpha3Code}
        width={300}>
      </img>
    </div>
  </div>
)

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ isOpen, setIsOpen ] = useState(false)
  const [ currentCountry, setCurrentCountry ] = useState()

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + newFilter)
      .then(response => {
        setCountries(response.data)
      })
  }, [newFilter])

  const onClick = (country) => () => {
    setCurrentCountry(country.name)
    setIsOpen(!isOpen)
  }

  const showCountryInfo = country => {
    if (isOpen && country.name === currentCountry) {
      return (
        <CountryInfo country={country}/>
      )
    }

    return (
      <></>
    )
  }

  const countriesList = 
    countries.length > 10 
      ? () => "Too many matches" 
      : countries.length > 1 
      ? () => countries.map(country =>
        <li key={country.numericCode}>
          {country.name}
          <button onClick={onClick(country)}>show</button>
          {showCountryInfo(country)}
        </li>
      ) 
      : () => (
          countries.map(country =>
            <CountryInfo country={country} />
          )
        )
      

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          find countries
          <input 
            value={newFilter}
            onChange={handleFilterChange}
          />
        </div>
      </form>
      <div>
        <ul>
          {countriesList()}
        </ul>
      </div>
    </div>
  )
}

export default App
