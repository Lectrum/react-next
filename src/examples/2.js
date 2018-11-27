// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _decrement = () => setCount(count - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount(count + 1);

    return (
        <section className = 'example'>
            <h1>Счётчик: {count}</h1>
            <div>
                <button onClick = { _decrement }>-</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _increment }>+</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
