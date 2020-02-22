import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const namesFilter = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter)
  ) 

  const names = () => namesFilter.map(person =>
    <li key={person.name}>{person.name} {person.phone}</li>
  )

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)

    if (names.indexOf(newName) === -1) {
      const nameObject = {
        name: newName,
        phone: newPhone
      }

      setPersons(persons.concat(nameObject))
    } else {    
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
    setNewPhone('')
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        filter shown with
        <input
           value={newFilter}
           onChange={handleFilterChange}
        />
      </form>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}  
          />
        </div>
        <div>
          number:
          <input 
            value={newPhone}
            onChange={handlePhoneChange}  
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {names()}
      </ul>
    </>
  )
}

export default App
