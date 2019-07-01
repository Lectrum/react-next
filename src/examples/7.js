/**
 * Второй аргумент useEffect является не обязательный.
 * Это массив. Он принимает набор значений.
 * Если массив пустой, то коллбек выполниться только один раз при первом рендере компонента.
 * А функция-очиститель выполнится один раз при удалении компонента из DOM.
 *
 * Представленная в этом примере форма useEffect работает похоже на связку
 * componentDidMount + componentWillUnmount.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const increment = () => setCount(count + 1);
    // const increment = () => {
    //     setCount((prevCount) => {
    //         console.log('⌚️ setCount, count', count);
    //         console.log('⌚️ setCount, prevCount', prevCount);

    //         return prevCount + 1;
    //     });
    // };

    useEffect(() => {
        const timer = setInterval(increment, 1000);

        console.log('⏳ useEffect');

        return () => {
            console.log('⌛️ Очистка!');
            clearInterval(timer);
        };
    }, []);

    console.log('🖥 Рендер!', count);

    return (
        <section className = 'counter'>
            <h1>Счётчик: {count}</h1>
            <button onClick = { decrement }>-</button>
            <button onClick = { reset }>Обнулить</button>
            <button onClick = { increment }>+</button>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
