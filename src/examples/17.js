// Core
import React, { useState, useMemo } from 'react';
import { render } from 'react-dom';

const getMultiplier = (a, b) => {
    console.log('✅ вычисляется только когда меняется один из аргументов');

    return a ** b;
};

const Parent = ({ firstValue, secondValue }) => {
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

    const _increment = () => setCount(count + 1);
    const _reset = () => setCount(0);
    const _decrement = () => setCount(count - 1);

    return (
        <section className = 'example'>
            <h1>
                Счётчик, умноженный на {memoizedMultiplier}
                :&nbsp;
                {count * memoizedMultiplier}
            </h1>
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
        firstValue = { 3 }
        secondValue = { 7 }
    />,
    document.getElementById('app'),
);
