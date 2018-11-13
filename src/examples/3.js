// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _increment = () => setCount((prevCount) => prevCount + 1);
    const _reset = () => setCount(0);
    const _decrement = () => setCount((prevCount) => prevCount - 1);

    return (
        <section className = 'example'>
            <h1>Счётчик: {count}</h1>
            <div>
                <button onClick = { _increment }>+</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _decrement }>-</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
