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
        <Part part={props.parts[0]} exercise={props.exercises[0]}/>
        <Part part={props.parts[1]} exercise={props.exercises[1]}/>
        <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </>
    )
}

const Footer = (props) => {
    console.log(props)
    return <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
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
    const parts_arr = [parts[0].name, parts[1].name, parts[2].name]
    const exercises = [parts[0].exercises, parts[1].exercises, parts[2].exercises]
    return (
        <div>
            <Header course={course} />
            <Content parts={parts_arr} exercises={exercises}/>
            <Footer exercises={exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
