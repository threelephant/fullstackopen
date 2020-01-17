import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}

let counter = 1

const refresh = () => {
    ReactDOM.render(<App counter={counter} />,
    document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
