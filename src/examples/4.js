/**
 * Если useState в качестве аргумента предать функцию
 * для вычисления изначального состояния,
 * то она выполнится только при первом рендере.
 */
import React, { useState } from 'react';
import { render } from 'react-dom';

const getInitialState = (baseValue, multiplier) => baseValue ** multiplier;

const Counter = (props) => {
    const [ count, setCount ] = useState(() => {
        console.log('✅ вычисляется один раз');
        const initialState = getInitialState(props.baseValue, props.multiplier);

        return initialState;
    });

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { () => setCount((prevCount) => prevCount - 1) }>
                -
            </button>
            <button onClick = { () => setCount(0) }>Обнулить</button>
            <button onClick = { () => setCount((prevCount) => prevCount + 1) }>
                +
            </button>
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
