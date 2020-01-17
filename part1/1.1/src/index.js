import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    console.log(props)
    return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
    console.log(props)

    return (
    <>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </>
    )
}

const Footer = (props) => {
    console.log(props)
    const exercises = props.parts.map(value => value.exercises)
    const total = exercises.reduce((sum, current) =>  sum + current)
    console.log(total)
    return <p>Number of exercises {total}</p>
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts}/>
            <Footer parts={parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
