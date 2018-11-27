// Core
import React from 'react';
import { render } from 'react-dom';

// Hooks
import { useCounter } from './hooks';

const Parent = () => {
    /** Выносим сложную логику в абстракцию — кастомный хук. */
    const { count, _decrement, _reset, _increment } = useCounter(5, 2);

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
