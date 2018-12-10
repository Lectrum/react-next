// Core
import React from 'react';
import { render } from 'react-dom';

// Hooks
import { useCounter } from './hooks';

const Counter = () => {
    /** Выносим сложную логику в абстракцию — кастомный хук. */
    const { count, _decrement, _reset, _increment } = useCounter(5, 2);

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
