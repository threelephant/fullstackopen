import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({ country, weather }) => (
  <div key={country.numericCode}>
    <h2>{country.name}</h2>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
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
    <div>
      <h3>Weather in {country.capital}</h3>
      <b>temperature: </b> {weather.temperature} Celsius <br />
      <img src={weather.weather_icons[0]} alt={country.capital}></img><br />
      <b>wind: </b> {weather.wind_speed} kph direction {weather.wind_dir}<br />
    </div>
  </div>
)

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ isOpen, setIsOpen ] = useState(false)
  const [ currentCountry, setCurrentCountry ] = useState()
  const [ capital, setCapital ] = useState("Helsinki")
  const [ weather, setWeather] = useState()
  const [ isOnce, setIsOnce] = useState(true)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + newFilter)
      .then(response => {
        setIsOnce(true)
        setCountries(response.data)
      })
  }, [newFilter])

  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current?access_key=6f9a08128bab1d52769934547b872778&query='
          + capital)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [capital])

  const onClick = (country) => () => {
    setCapital(country.capital)
    setCurrentCountry(country.name)
    setIsOpen(!isOpen)
  }

  const showCountryInfo = country => {
    if (isOpen && country.name === currentCountry) {
      return (
        <CountryInfo 
          country={country}
          weather={weather}
        />
      )
    }

    return (
      <></>
    )
  }

  const setOnceCapital = (country) => {
    if (isOnce) {
      setCapital(country.capital)
      setIsOnce(false)
    }
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
            <div>
              {setOnceCapital(country)}
              <CountryInfo
                key={country.numericCode} 
                country={country}
                weather={weather}
              />
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
