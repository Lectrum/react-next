// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ countData, setCount ] = useState({
        count:          0,
        isCountStarted: false,
    });

    const _decrement = () => setCount((prevCountData) => ({
        count:          prevCountData.count - 1,
        isCountStarted: true,
    }));
    const _reset = () => setCount((prevCountData) => ({
        ...prevCountData,
        count: 0,
    }));
    const _increment = () => setCount((prevCountData) => ({
        count:          prevCountData.count + 1,
        isCountStarted: true,
    }));

    return (
        <section className = 'counter'>
            <h1>
                <span>Счётчик: {countData.count}</span>
                <span>{countData.isCountStarted ? '✅' : '❌'}</span>
            </h1>
            <button onClick = { _decrement }>-</button>
            <button onClick = { _reset }>Обнулить</button>
            <button onClick = { _increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
