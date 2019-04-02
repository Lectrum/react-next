// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ state, setState ] = useState({
        count:     0,
        isTouched: false,
    });

    const decrement = () => setState((prevState) => ({
        count:     prevState.count - 1,
        isTouched: true,
    }));
    const reset = () => setState((prevState) => ({
        ...prevState,
        count: 0,
    }));
    const increment = () => setState((prevState) => ({
        count:     prevState.count + 1,
        isTouched: true,
    }));

    return (
        <section className = 'counter'>
            <h1>
                <span>Счётчик: {state.count}</span>
                <span>{state.isTouched ? '✅' : '❌'}</span>
            </h1>
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Обнулить</button>
            <button onClick = { increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
