// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count1, setCount1 ] = useState(
        () => Number(localStorage.getItem('count')) || 0,
    );
    const [ count2, setCount2 ] = useState(0);

    const _increment1 = () => setCount1(count1 + 1);
    const _reset1 = () => setCount1(0);
    const _decrement1 = () => setCount1(count1 - 1);

    const _increment2 = () => setCount2(count2 + 1);
    const _reset2 = () => setCount2(0);
    const _decrement2 = () => setCount2(count2 - 1);

    /**
     * Как вариант, о useEffect можно думать,
     * как о componentDidMount + componentDidUpdate.
     */
    useEffect(
        () => {
            console.log('→ Запись в localStorage 🚜');
            localStorage.setItem('count', count1);
        },
        [ count1 ], // Вызывает useEffect только если это значение изменилось.
    );

    /**
     * Иными словами, второй аргумент useEffect — это способ
     * оптимизации производительности используемого эффекта.
     */

    return (
        <section className = 'example'>
            <h1>First count: {count1}</h1>
            <div>
                <button onClick = { _increment1 }>+</button>
                <button onClick = { _reset1 }>Reset</button>
                <button onClick = { _decrement1 }>-</button>
            </div>
            <h1>Second count: {count2}</h1>
            <div>
                <button onClick = { _increment2 }>+</button>
                <button onClick = { _reset2 }>Reset</button>
                <button onClick = { _decrement2 }>-</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
