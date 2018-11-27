// Core
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Stopwatch = () => {
    const [ lapse, setLapse ] = useState(0);
    const [ isRunning, setRunning ] = useState(false);
    const intervalRef = useRef(null);

    const _toggleRun = () => {
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

    const _clear = () => {
        clearInterval(intervalRef.current);
        setLapse(0);
        setRunning(false);
    };

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <div className = 'stopwatch'>
            <code>{lapse} мс</code>
            <button onClick = { _toggleRun }>{buttonText}</button>
            <button onClick = { _clear }>Очистить</button>
        </div>
    );
};

render(<Stopwatch />, document.getElementById('app'));
