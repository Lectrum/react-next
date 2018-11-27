// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _decrement = () => setCount(count - 1);
    const _reset = () => setCount(0);
    const _increment = () => setCount(count + 1);

    useEffect(() => {
        /**
         * Тело этой функции выполнится после каждого:
         * - рендера;
         * - коммита отрендеренной разметки в DOM;
         * - последующей отрисовки браузером.
         */
        console.log('⏳ useEffect');
        setTimeout(_increment, 1000);
        /**
         * То есть хук useEffect делает отложенный вызов
         * функции, которую он принимает в первом аргументе.
         */
    });

    console.log('🖥 render');

    return (
        <section className = 'example'>
            <h1>Счётчик: {count}</h1>
            <div>
                <button onClick = { _decrement }>-</button>
                <button onClick = { _reset }>Обнулить</button>
                <button onClick = { _increment }>+</button>
            </div>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
