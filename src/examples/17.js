/**
 * Более сложную логику, или логику, которую можно использовать повторно нужно выносить в абстракцию — кастомный хук.
 */
import React from 'react';
import { render } from 'react-dom';

// Hooks
import { useCounter } from './hooks';

const Counter = () => {
    const counter = useCounter(5, 2);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {counter.count}</h1>
            <button onClick = { counter.decrement }>-</button>
            <button onClick = { counter.reset }>Обнулить</button>
            <button onClick = { counter.increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
