import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [ counter, setCounter ] = useState(0)

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                plus
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
