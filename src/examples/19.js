// Core
import React, { memo, useState, useCallback } from 'react';
import { render } from 'react-dom';

const Button = memo((props) => {
    console.log('→ render', props);

    return <button onClick = { props.handleClick }>{props.children}</button>;
});

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _increment = useCallback(() => setCount(count + 1));
    const _reset = useCallback(() => setCount(0));
    const _decrement = useCallback(() => setCount(count - 1));

    return (
        <section className = 'example'>
            <h1>
                Счётчик:&nbsp;
                {count}
            </h1>
            <div>
                <Button handleClick = { _increment }>-</Button>
                <Button handleClick = { _reset }>reset</Button>
                <Button handleClick = { _decrement }>+</Button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
