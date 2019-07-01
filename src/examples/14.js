/**
 * Объект, который возвращает хук useRef можно использовать также, как контейнер для
 * хранений данных, которые нельзя терять между перерендерами компонента.
 */
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Stopwatch = () => {
    const [ lapse, setLapse ] = useState(0);
    const [ isRunning, setRunning ] = useState(false);
    const intervalRef = useRef(null);

    const toggleRun = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime);
            }, 0);
        }

        setRunning(!isRunning);
    };

    const clear = () => {
        clearInterval(intervalRef.current);
        setLapse(0);
        setRunning(false);
    };

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <section className = 'stopwatch'>
            <code>{lapse} мс</code>
            <button onClick = { toggleRun }>{buttonText}</button>
            <button onClick = { clear }>Очистить</button>
        </section>
    );
};

render(<Stopwatch />, document.getElementById('app'));
