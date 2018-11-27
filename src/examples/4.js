// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ countData, setCount ] = useState({
        count:          0,
        isCountStarted: false,
    });

    const _decrement = () => setCount((prevCountData) => ({
        count:          prevCountData.count - 1,
        isCountStarted: true,
    }));
    const _reset = () => setCount((prevCountData) => ({
        ...prevCountData,
        count: 0,
    }));
    const _increment = () => setCount((prevCountData) => ({
        count:          prevCountData.count + 1,
        isCountStarted: true,
    }));

    return (
        <section className = 'example'>
            <h1>
                Счётчик: {countData.count}
                ,&nbsp;
                {countData.isCountStarted ? '' : 'не'} начал отсчёт
            </h1>
            <div>
                <button onClick = { _decrement }>-</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _increment }>+</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
