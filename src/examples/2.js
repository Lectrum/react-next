// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { () => setCount(count - 1) }>-</button>
            <button onClick = { () => setCount(0) }>Обнулить</button>
            <button onClick = { () => setCount(count + 1) }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
