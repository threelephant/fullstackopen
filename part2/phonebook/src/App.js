import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '8-800-555-35-35'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const names = () => persons.map(person =>
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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
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
