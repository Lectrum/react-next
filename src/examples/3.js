/**
 * Функция для изменения значения ячейки состояния может принимать коллбек.
 * Первый параметр этого коллбека содержит ссылку на предыдущее значение обрабатываемой ячейки состояния.
 *
 * Идея похожа на функциональную форму setState в классовых компонентах.
 *
 * Чтобы обладать несколькими значениями состояния
 * необходимо создать несколько соответствующих ячеек с помощью вызовов useState.
 */
import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);
    const [ isTouched, setIsTouched ] = useState(false);

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
        setIsTouched(true);
    };
    const reset = () => {
        setCount(0);
        setIsTouched(false);
    };
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
        setIsTouched(true);
    };

    console.log('🖥 Рендер!', count);

    return (
        <section className = 'counter'>
            <h1>
                <span>Счётчик: {count}</span>
                <span>{isTouched ? '✅' : '❌'}</span>
            </h1>
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Обнулить</button>
            <button onClick = { increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
