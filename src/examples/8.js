// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const getInitialState = () => Number(localStorage.getItem('count')) || 0;

const Counter = () => {
    /* ↓ под капотом у React ↓ */
    const [ count1, setCount1 ] = useState(getInitialState); /* (1) состояние: регистрация ячейки памяти [1] */
    const [ count2, setCount2 ] = useState(0);               /* (2) состояние: регистрация ячейки памяти [1, 2] */

    /**
     * О useEffect такой формы можно думать,
     * как о componentDidMount + componentDidUpdate.
     */
    useEffect(//                                             /* (3) сайд-эффект: регистрация ячейки памяти [1, 2, 3] */
        () => {                                              /* (4) тело эффекта выполняется после коммита разметки в DOM */
            console.log('📦 Запись в localStorage');
            localStorage.setItem('count', count1);
        },
        [ count1 ] /** Выполняет useEffect только в том случае, если это значение изменилось. */,
    );
    /**
     * Иными словами, второй аргумент useEffect — это способ
     * оптимизации производительности используемого эффекта.
     */

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
