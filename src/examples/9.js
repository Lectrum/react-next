// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _increment = () => setCount(count + 1);
    // const _increment = () => {
    //     setCount((prevCount) => {
    //         // console.log('⌚️ setCount, count', count);
    //         // console.log('⌚️ setCount, prevCount', prevCount);

    //         return prevCount + 1;
    //     });
    // };
    const _reset = () => setCount(0);
    const _decrement = () => setCount(count - 1);

    useEffect(() => {
        const timer = setInterval(_increment, 1000);

        console.log('⏳ useEffect');

        return () => {
            console.log('⌛️ clearing');
            clearInterval(timer);
        };
        /**
         * Если вторым аргументом useEffect передать пустой массив,
         * то useEffect сработает как componentDidMount + componentWillUnmount.
         *
         * То есть при первом рендере выполнится тело useEffect — зарегистрируется таймер.
         * А при удалении компонента из DOM выполнится clearTimeout.
         */
    }, []);

    // console.log('🖥 render, count', count);

    return (
        <section className = 'example'>
            <h1>Счётчик: {count}</h1>
            <div>
                <button onClick = { _increment }>+</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _decrement }>-</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
