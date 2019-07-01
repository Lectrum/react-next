/**
 * Функция для изменения значения ячейки состояния может принимать коллбек.
 * Первый параметр этого коллбека содержит ссылку на предыдущее значение обрабатываемой ячейки состояния.
 *
 * Идея похожа на функциональную форму setState в классовых компонентах.
 */
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);
    const increment = () => setCount((prevCount) => prevCount + 1);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Обнулить</button>
            <button onClick = { increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
