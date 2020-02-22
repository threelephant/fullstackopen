import React from 'react'

const Persons = ({ names }) => (
  <ul>
    {names()}
  </ul>
)

export default Persons
