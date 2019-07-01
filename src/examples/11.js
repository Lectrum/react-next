/**
 * Приблизительных механизм работы хуков под капотом у React.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const getInitialState = () => Number(localStorage.getItem('count')) || 0;

const Counter = () => {
    //                                                          (0) создание графа для ячеек памяти []
    const [ count1, setCount1 ] = useState(getInitialState); /* (1) регистрация ячейки памяти с useState [1] */
    const [ count2, setCount2 ] = useState(0);               /* (2) регистрация ячейки памяти с useState [1, 2] */

    useEffect(//                                             /* (3) регистрация ячейки памяти с useEffect [1, 2, 3] */
        () => {
            console.log('📦 Запись в localStorage');
            localStorage.setItem('count', count1);
        },
        [ count1 ],
    );

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
