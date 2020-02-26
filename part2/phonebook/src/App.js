import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import noteService from './Services/notes'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  useEffect(() => {
    noteService
      .getAll()
        .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

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

      noteService
        .create(nameObject)
          .then(returnedNote => {
            setPersons(persons.concat(returnedNote))
            setNewName('')
            setNewPhone('')
          })
          
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
      <Filter
        value={newFilter}
        onChange={handleFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm 
        onSubmit={addName}
        name={newName}
        handleNameChange={handleNameChange}
        phone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons
        names={names} 
      />
    </>
  )
}

export default App
