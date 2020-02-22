import React from 'react'

const Footer = (props) => {
  const exercises = props.parts.map(value => value.exercises)
  const total = exercises.reduce((sum, current) =>  sum + current)
  
  return <p><b>total of exercises {total}</b></p>
}

export default Footer
