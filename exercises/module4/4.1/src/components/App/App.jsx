import { useState, useEffect } from 'react'
import 'components/App/App.css'
import Person from 'components/Person/Person'
import personsService from 'services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect');
    personsService
      .getAll()
      .then(response => {
        console.log('promised fulfilled');
        setPersons(response)
      })
  }, [])
  console.log('render', persons.length, 'persons');

  const addNumber = (e) => {
    e.preventDefault();
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
      <div>debug: {newName}</div>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />)}
      </ul>
    </div>
  )
}

export default App