// Core
import React, { useState, useMemo } from 'react';
import { render } from 'react-dom';

const getMultiplier = (a, b) => {
    console.log('✅ вычисляется только когда меняется один из аргументов');

    return a ** b;
};

const Counter = ({ firstValue, secondValue }) => {
    const [ count, setCount ] = useState(0);
    const memoizedMultiplier = useMemo(
        () => getMultiplier(firstValue, secondValue),
        /**
         * Функция-вычислитель ↑ выполнится снова
         * только в том, случае, если изменится
         * хотя-бы одно из этих ↓ значений.
         */
        [ firstValue, secondValue ],
    );

    const _decrement = () => setCount((prevCount) => prevCount - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount((prevCount) => prevCount + 1);

    return (
        <section className = 'counter'>
            <h1>
                <span>Счётчик, умноженный на {memoizedMultiplier}:</span>
                <span>{count * memoizedMultiplier}</span>
            </h1>
            <button onClick = { _decrement }>-</button>
            <button onClick = { _reset }>Обнулить</button>
            <button onClick = { _increment }>+</button>
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
