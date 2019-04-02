// Core
import React, { useReducer, useRef, useEffect } from 'react';
import { render } from 'react-dom';

/**
 * Таким образом можно реализовать
 * поведение, похожее на вызов
 * this.setState в классовых компонентах.
 */
const stopwatchReducer = (currentState, newState) => ({
    ...currentState,
    ...newState,
});

const Stopwatch = () => {
    /**                          ↓ почти как this.setState у классов */
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

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const buttonText = isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <section className = 'stopwatch'>
            <code>{lapse} мс</code>
            <button onClick = { _toggleRun }>{buttonText}</button>
            <button onClick = { _clear }>Очистить</button>
        </section>
    );
};

render(<Stopwatch />, document.getElementById('app'));
