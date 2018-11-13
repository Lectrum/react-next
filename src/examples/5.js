// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const getInitialState = (baseValue, multiplier) => baseValue ** multiplier;

const Parent = (props) => {
    /**
     * Если useState в аргумента предать функцию
     * для вычисления изначального состояния,
     * то она выполнится только при первом рендере.
     */
    const [ count, setCount ] = useState(() => {
        const initialState = getInitialState(props.baseValue, props.multiplier);

        return initialState;
    });

    const _increment = () => setCount((prevCount) => prevCount + 1);
    const _reset = () => setCount(0);
    const _decrement = () => setCount((prevCount) => prevCount - 1);

    return (
        <section className = 'example'>
            <h1>Счётчик: {count}</h1>
            <div>
                <button onClick = { _increment }>+</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _decrement }>-</button>
            </div>
        </section>
    );
};

render(
    <Parent
        baseValue = { 6 }
        multiplier = { 11 }
    />,
    document.getElementById('app'),
);
