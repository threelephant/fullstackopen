import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Header = (props) => (
    <>
        <h1>{props.course}</h1>
    </>
)

const Part = (props) => (
    <>
        <p>
            {props.part} {props.exercise}
        </p>
    </>
)

const Content = (props) => (
    <>
        <Part part={props.parts[0]} exercise={props.exercises[0]}/>
        <Part part={props.parts[1]} exercise={props.exercises[1]}/>
        <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </>
)

const Footer = (props) => (
    <>
        <p>
            Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
        </p>
    </>
)

const App = () => {
    const course = 'Half Stack application development'
    const parts = ['Fundamentals of React',
                    'Using props to pass data',
                    'State of a component']
    const exercises = [10, 7, 14]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} exercises={exercises}/>
            <Footer exercises={exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
