/**
 * Хук useMemo предназначен для мемоизации функции.
 */
import React, { useState, useMemo } from 'react';
import { render } from 'react-dom';

const getMultiplier = (operand1, operand2) => {
    console.log('✅ Вычисляется только при изменении одного из аргументов.');

    return operand1 ** operand2;
};

const Counter = ({ firstValue, secondValue }) => {
    const [ count, setCount ] = useState(0);
    const memoizedMultiplier = useMemo(
        () => getMultiplier(firstValue, secondValue),
        [ firstValue, secondValue ],
    );

    return (
        <section className = 'counter'>
            <h1>
                <span>Счётчик, умноженный на {memoizedMultiplier}:</span>
                <span>{count * memoizedMultiplier}</span>
            </h1>
            <button onClick = { () => setCount(count - 1) }>-</button>
            <button onClick = { () => setCount(0) }>Обнулить</button>
            <button onClick = { () => setCount(count + 1) }>+</button>
        </section>
    );
};

render(
    <Counter
        firstValue = { 3 }
        secondValue = { 4 }
    />,
    document.getElementById('app'),
);
