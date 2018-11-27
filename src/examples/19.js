// Core
import React, { memo, useState, useCallback, useMemo } from 'react';
import { render } from 'react-dom';

const Button = memo((props) => {
    console.log('→ 🖥 Рендер потомка', props);

    return <button onClick = { props.handleClick }>{props.children}</button>;
});

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _decrement = useCallback(() => setCount((prevCount) => prevCount - 1));
    const _reset = useCallback(() => setCount(0));
    /* Хук useCallback(fn, inputs) эквивалентен хуку useMemo(() => fn, inputs) */
    const _increment = useMemo(() => () => setCount((prevCount) => prevCount + 1));

    console.log('→ 🖥 Рендер родителя');

    return (
        <section className = 'example'>
            <h1>
                Счётчик:&nbsp;
                {count}
            </h1>
            <div>
                <Button handleClick = { _decrement }>-</Button>
                <Button handleClick = { _reset }>Обнулить</Button>
                <Button handleClick = { _increment }>+</Button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
