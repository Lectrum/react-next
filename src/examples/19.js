/**
 * Хук useCallback похож на хук useCallback.
 *
 * useCallback(fn, inputs)
 * useMemo(() => fn, inputs)
 */
import React, { memo, useState, useCallback } from 'react';
import { render } from 'react-dom';

const Button = memo((props) => {
    console.log('→ 🖥 Рендер потомка', props);

    return <button onClick = { props.handleClick }>{props.children}</button>;
});

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const decrement = useCallback(
        () => setCount((prevCount) => prevCount - 1),
        [],
    );
    const reset = useCallback(() => setCount(0), []);
    const increment = useCallback(
        () => setCount((prevCount) => prevCount + 1),
        [],
    );

    console.log('→ 🖥 Рендер родителя');

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <Button handleClick = { decrement }>-</Button>
            <Button handleClick = { reset }>Обнулить</Button>
            <Button handleClick = { increment }>+</Button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
