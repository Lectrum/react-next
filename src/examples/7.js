// Core
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ count, setCount ] = useState(0);

    const _increment = () => setCount(count + 1);
    const _reset = () => setCount(0);
    const _decrement = () => setCount(count - 1);

    useEffect(() => {
        const timer = setTimeout(_increment, 1000);

        return () => clearTimeout(timer);
        /**
         * Эта функция-очиститель выполнится в двух случаях:
         * 1. При повторном рендере: предыдущий таймер будет очищен перед регистрацией нового;
         * 2. Перед удалением компонента из DOM.
         *
         * В этом примере useEffect выполняет регистрацию
         * нового таймера при каждом новом рендере.
         *
         * Либо любого другого сайд-эффекта в другой конфигурации.
         *
         * При этом, следующее выполнение useEffect
         * регистрацию раньше следующего рендера компонента.
         */
    });

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
