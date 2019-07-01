/**
 * Пример использования не пустого массива
 * в качестве второго аргумента useEffect.
 */
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log('✅ Первый рендер компонента.');

        return () => console.log('❌ Удаление компонента.');
    }, []);

    console.log('🖥 Рендер!', count);

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

    const buttonText = isMounted ? 'Спрятать' : 'Показать';

    return (
        <section className = 'counter'>
            <button onClick = { () => setIsMounted(!isMounted) }>
                {buttonText}
            </button>
            {isMounted && <Counter />}
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
