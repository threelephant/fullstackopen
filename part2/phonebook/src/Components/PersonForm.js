import React from 'react'

const PersonForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <div>
      name: 
      <input 
        value={props.name}
        onChange={props.handleNameChange}  
      />
    </div>
    <div>
      number:
      <input 
        value={props.phone}
        onChange={props.handlePhoneChange}  
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm
