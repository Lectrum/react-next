// Core
import React from 'react';
import { render } from 'react-dom';

// Hooks
import { useCounter } from './hooks';

const Parent = () => {
    /**
     * Выносим сложную логику в абстракцию — кастомный хук.
     */
    const { count, _increment, _decrement, _reset } = useCounter(5, 2);

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
