// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const _decrement = () => setCount(count - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount(count + 1);

    useEffect(() => {
        const timer = setTimeout(_increment, 1000);

        console.log('⏳ useEffect');

        return () => {
            console.log('⌛️ очистка!');

            clearTimeout(timer);
        };
        /**
         * Эта функция-очиститель выполнится в двух случаях:
         * 1. При повторном рендере: чтобы очистить предыдущий таймер перед регистрацией нового;
         * 2. Перед удалением компонента из DOM: чтобы избежать утечки памяти.
         *
         * В этом примере useEffect выполняет регистрацию
         * нового таймера при первом рендере, а также
         * при каждом новом рендере.
         *
         * При этом, регистрируется следующего useEffect
         * происходит раньше следующего рендера компонента.
         */
    });

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { _decrement }>-</button>
            <button onClick = { _reset }>Обнулить</button>
            <button onClick = { _increment }>+</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
