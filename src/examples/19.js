// Core
import React, { memo, useState, useCallback, useMemo } from 'react';
import { render } from 'react-dom';

const Button = memo((props) => {
    console.log('→ 🖥 Рендер потомка', props);

    return <button onClick = { props.handleClick }>{props.children}</button>;
});

const Counter = () => {
    const [ count, setCount ] = useState(0);

    /* Хук useCallback(fn, inputs) эквивалентен хуку useMemo(() => fn, inputs) */
    const _decrement = useCallback(() => setCount((prevCount) => prevCount - 1));
    const _reset = useCallback(() => setCount(0));
    const _increment = useMemo(() => () => setCount((prevCount) => prevCount + 1));

    console.log('→ 🖥 Рендер родителя');

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <Button handleClick = { _decrement }>-</Button>
            <Button handleClick = { _reset }>Обнулить</Button>
            <Button handleClick = { _increment }>+</Button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
