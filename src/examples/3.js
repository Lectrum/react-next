// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const _decrement = () => setCount((prevCount) => prevCount - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount((prevCount) => prevCount + 1);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { _decrement }>-</button>
            <button onClick = { _reset }>Обнулить</button>
            <button onClick = { _increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
