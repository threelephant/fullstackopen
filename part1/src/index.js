import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Footer = () => {
    return (
        <>
            greeting app created by&#160;
            <a href="https://github.com/threelephant">threelephant</a>
        </>
    )
}

const Hello = (props) => {
    return (
        <>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10

    return (
    <>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
        <Footer />
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
