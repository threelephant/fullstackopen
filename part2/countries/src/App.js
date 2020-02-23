import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + newFilter)
      .then(response => {
        setCountries(response.data)
      })
  }, [newFilter])

  const countriesList = 
    countries.length > 10 
      ? () => "Too many matches" 
      : countries.length > 1 
      ? () => countries.map(country =>
        <li key={country.numericCode}>{country.name}</li>
      ) 
      : () => (
          countries.map(country =>
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
