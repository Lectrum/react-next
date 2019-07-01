/**
 * Хук useEffect используется доя обработки сайд-эффектов в компонентах React.
 * В первом аргументе useEffect принимает коллбек, который содержит логику сайд-эффекта.
 *
 * Тело функции выполнится после каждого:
 *   - рендера;
 *   - коммита отрендеренной разметки в DOM;
 *   - последующей отрисовки браузером.
 *
 * Хук useEffect делает отложенный вызов функции, которую он принимает в первом аргументе.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    useEffect(() => {
        console.log('⏳ useEffect');
        setTimeout(increment, 1000);
    });

    console.log('🖥 Рендер!');

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
