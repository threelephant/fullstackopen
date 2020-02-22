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
      key={part.id}
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React', 
          exercises: 10,
          id: 1    
        },
        {
          name: 'Using props to pass data', 
          exercises: 7,
          id: 2    
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing', 
          exercises: 3,
          id: 1    
        },
        {
          name: 'Middlewares', 
          exercises: 7,
          id: 2    
        }
      ]
    }
  ]

  const course = () => courses.map(course =>
    <Course
      key={course.id} 
      course={course}
    />
  )

  return (
    <div>
      {course()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
