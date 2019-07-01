/**
 * Массив, переданный во второй аргумент useEffect можно заполнить значениями.
 * После рендере коллбек useEffect не будет выполняться,
 * если значения из этого массива не изменились.
 *
 * О useEffect такой формы можно думать,
 * как о componentDidMount + componentDidUpdate + componentWillUnmount.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);

    useEffect(() => {
        const timer = setInterval(increment, 1000);

        console.log('⏳ useEffect');

        return () => {
            console.log('⌛️ Очистка!');
            clearInterval(timer);
        };
    }, [ increment ]);

    console.log('🖥 Рендер!', count);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Обнулить</button>
            <button onClick = { increment }>+</button>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
