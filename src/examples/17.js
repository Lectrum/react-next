/**
 * Функция memo — это аналог shouldComponentUpdate,
 * только для функциональных компонентов.
 */
import React, { memo, useState } from 'react';
import { render } from 'react-dom';

// Hooks
import { useStopwatch, useRandomColor } from './hooks';

const Title = memo((props) => {
    const color = useRandomColor();

    return <h1 style = {{ color }}>Счётчик: {props.count}</h1>;
});

const Parent = () => {
    const [ count, setCount ] = useState(0);
    const stopwatch = useStopwatch();

    const buttonText = stopwatch.isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <>
            <section className = 'counter'>
                <Title count = { count } />
                <button onClick = { () => setCount(count - 1) }>-</button>
                <button onClick = { () => setCount(0) }>Обнулить</button>
                <button onClick = { () => setCount(count + 1) }>+</button>
            </section>
            <section className = 'stopwatch'>
                <code>{stopwatch.lapse} мс</code>
                <button onClick = { stopwatch.toggleRun }>{buttonText}</button>
                <button onClick = { stopwatch.clear }>Очистить</button>
            </section>
        </>
    );
};

render(<Parent />, document.getElementById('app'));
