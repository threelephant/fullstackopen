import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
  ])
  const [ newName, setNewName ] = useState('')

  const names = () => persons.map(person =>
    <li key={person.name}>{person.name}</li>
  )

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    if (names.indexOf(newName) === -1) {
      const nameObject = {
        name: newName
      }

      setPersons(persons.concat(nameObject))
    } else {    
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
