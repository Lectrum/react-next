// Core
import React, { useReducer, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const stopwatchReducer = (currentState, newState) => {
    return { ...currentState, ...newState };
};

const Stopwatch = () => {
    const [{ isRunning, lapse }, setState ] = useReducer(stopwatchReducer, {
        isRunning: false,
        lapse:     0,
    });
    const intervalRef = useRef(null);

    const _toggleRun = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                setState({
                    lapse: Date.now() - startTime,
                });
            }, 0);
        }
        setState({ isRunning: !isRunning });
    };

    const _clear = () => {
        clearInterval(intervalRef.current);
        setState({ lapse: 0, isRunning: false });
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

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
