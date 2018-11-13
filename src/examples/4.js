// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ countData, setCount ] = useState({
        count:          0,
        isCountStarted: false,
    });

    const _increment = () => setCount((prevCountData) => ({
        count:          prevCountData.count + 1,
        isCountStarted: true,
    }));
    const _reset = () => setCount((prevCountData) => ({
        ...prevCountData,
        count: 0,
    }));
    const _decrement = () => setCount((prevCountData) => ({
        count:          prevCountData.count - 1,
        isCountStarted: true,
    }));

    return (
        <section className = 'example'>
            <h1>
                Счётчик: {countData.count}
                ,&nbsp;
                {countData.isCountStarted ? '' : 'не'} начал отсчёт.&nbsp;
            </h1>
            <div>
                <button onClick = { _increment }>+</button>
                <button onClick = { _reset }>Reset</button>
                <button onClick = { _decrement }>-</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
