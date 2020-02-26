import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import noteService from './Services/notes'
import Notification from './Components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ message, setMessage] = useState(null)

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

  const deletePerson = person => () => {
    if (window.confirm(`Delete ${person.name}`)) {
      noteService
        .deleteNote(person.id)
          .then(_ => {
            setPersons(persons.filter(p => p.id !== person.id))
          })
    }
  }

  const names = () => namesFilter.map(person =>
    <li key={person.name}>
      {person.name} {person.phone}
      <button onClick={deletePerson(person)}>
        delete
      </button>
    </li>
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
          })
      
      setMessage(
        `Added ${nameObject.name}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } else {    
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = persons.find(p => p.name === newName)

        const updatedPerson = {
          ...changedPerson,
          phone: newPhone
        }

        noteService
          .update(updatedPerson.id, updatedPerson).then(returnedNote => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : returnedNote))
          })
        
        setMessage(
          `Updated ${updatedPerson.name}`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
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
      <Notification message={message} />
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
