/**
 * Если второй аргумент useEffect — пустой массив,
 * то коллбек useEffect выполнится один раз при первом рендере компонента,
 * а функция-очиститель выполнится один раз при удалении компонента из DOM.
 *
 * Это похоже на связку componentDidMount + componentWillUnmount.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log('✅ Первый рендер компонента.');

        return () => console.log('❌ Удаление компонента.');
    }, []);

    console.log('🖥 Рендер!');

    return (
        <section>
            <h1>Счётчик: {count}</h1>
            <button onClick = { () => setCount(count - 1) }>-</button>
            <button onClick = { () => setCount(0) }>Обнулить</button>
            <button onClick = { () => setCount(count + 1) }>+</button>
        </section>
    );
};

const Parent = () => {
    const [ isMounted, setIsMounted ] = useState(true);

    return (
        <section className = 'counter'>
            <button onClick = { () => setIsMounted(!isMounted) }>
                {isMounted ? 'Спрятать' : 'Показать'}
            </button>
            {isMounted && (
                <Counter
                    isMounted = { isMounted }
                    setIsMounted = { setIsMounted }
                />
            )}
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
