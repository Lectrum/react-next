// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const getInitialState = (baseValue, multiplier) => baseValue ** multiplier;

const Counter = (props) => {
    /**
     * Если useState в качестве аргумента предать функцию
     * для вычисления изначального состояния,
     * то она выполнится только при первом рендере.
     */
    const [ count, setCount ] = useState(() => {
        console.log('✅ вычисляется один раз');
        const initialState = getInitialState(props.baseValue, props.multiplier);

        return initialState;
    });
    /**
     * Такую форму useState можно использовать,
     * чтобы выполнить какое-то тяжёлое (или не очень)
     * вычисление для получения изначального состояния.
     */

    const _decrement = () => setCount((prevCount) => prevCount - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount((prevCount) => prevCount + 1);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { _decrement }>-</button>
            <button onClick = { _reset }>Обнулить</button>
            <button onClick = { _increment }>+</button>
        </section>
    );
};

render(
    <Counter
        baseValue = { 3 }
        multiplier = { 4 }
    />,
    document.getElementById('app'),
);
