import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Content = (props) => {
  const parts = () => props.parts.map(part =>
    <Part 
      part={part.name} 
      exercise={part.exercises}
    />
  )

  return (
    <>
      {parts()}
    </>
  )
}

const Footer = (props) => {
  const exercises = props.parts.map(value => value.exercises)
  const total = exercises.reduce((sum, current) =>  sum + current)
  
  return <p><b>total of exercises {total}</b></p>
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Footer parts={course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', 
        exercises: 10    
      },
      {
        name: 'Using props to pass data', 
        exercises: 7    
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
