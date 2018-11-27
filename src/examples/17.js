// Core
import React, { memo, useState } from 'react';
import { render } from 'react-dom';

// Hooks
import { useStopWatch, useRandomColor } from './hooks';

/**
 * memo — аналог метода жизненного цикла shouldComponentUpdate,
 * только для функциональных компонентов.
 */
const Title = memo((props) => {
    const color = useRandomColor();

    return <h1 style = {{ color }}>Счётчик: {props.count}</h1>;
});

const Parent = () => {
    const [ count, setCount ] = useState(0);
    const { lapse, clear, isRunning, toggleRun } = useStopWatch();

    const _decrement = () => setCount((prevCount) => prevCount - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount((prevCount) => prevCount + 1);

    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <section className = 'example'>
            <Title count = { count } />
            <div>
                <button onClick = { _decrement }>-</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _increment }>+</button>
            </div>
            <section className = 'stopwatch'>
                <code>{lapse} мс</code>
                <button onClick = { toggleRun }>{buttonText}</button>
                <button onClick = { clear }>Очистить</button>
            </section>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
