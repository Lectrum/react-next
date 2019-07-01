/**
 * Второй аргумент useEffect является не обязательный.
 * Это массив. Он принимает набор значений.
 * Коллбек useEffect не будет выполняться, если значения из этого массива не изменились.
 * При этом коллбек всё равно выполниться как минимум:
 * - при первом рендере;
 * - при удалении анмаунтинге компонента.
 *
 * О useEffect такой формы можно думать,
 * как о componentDidMount + componentDidUpdate + componentWillUnmount.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const getInitialState = () => Number(localStorage.getItem('count')) || 0;

const Counter = () => {
    const [ count1, setCount1 ] = useState(getInitialState);
    const [ count2, setCount2 ] = useState(0);

    useEffect(() => {
        console.log('📦 Запись в localStorage', count1);
        localStorage.setItem('count', count1);
    }, [ count1 ]);

    return (
        <>
            <section className = 'counter counter-1'>
                <h1>Первый счётчик: {count1}</h1>
                <button onClick = { () => setCount1(count1 - 1) }>-</button>
                <button onClick = { () => setCount1(0) }>Обнулить</button>
                <button onClick = { () => setCount1(count1 + 1) }>+</button>
            </section>
            <section className = 'counter counter-2'>
                <h1>Второй счётчик: {count2}</h1>
                <button onClick = { () => setCount2(count2 - 1) }>-</button>
                <button onClick = { () => setCount2(0) }>Обнулить</button>
                <button onClick = { () => setCount2(count2 + 1) }>+</button>
            </section>
        </>
    );
};

render(<Counter />, document.getElementById('app'));
