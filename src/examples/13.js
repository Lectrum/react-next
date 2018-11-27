// Core
import React, { useReducer, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const stopwatchReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LAPSE':
            return {
                ...state,
                lapse: action.payload.currentTime - action.payload.startTime,
            };
        case 'START_RUNNING':
            return {
                ...state,
                isRunning: true,
            };
        case 'STOP_RUNNING':
            return {
                ...state,
                isRunning: false,
            };
        case 'RESET':
            return {
                ...state,
                lapse:     0,
                isRunning: false,
            };
        default:
            return state;
    }
};

const Stopwatch = () => {
    /**
     * Механизм работы useReducer идентичен по отношению к Redux.
     * Если ты раньше юзал Redux, то useReducer для тебя как аквариум
     * для рыбки. Или мягкий коврик для котика.
     * 🐈
     */
    const [{ isRunning, lapse }, dispatch ] = useReducer(
        // 1-й аргумент — редьюсер.
        stopwatchReducer,
        // 2-й аргумент — изначальное состояние.
        {
            isRunning: false,
            lapse:     0,
        },
        // 3-й опциональный аргумент — экшен, который нужно запустить во время первого рендера.
        {
            type:    'SET_LAPSE',
            payload: { currentTime: 100, startTime: 50 },
        },
    );
    const intervalRef = useRef(null);

    const _toggleRun = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            dispatch({ type: 'STOP_RUNNING' });
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                dispatch({
                    type:    'SET_LAPSE',
                    payload: { currentTime: Date.now(), startTime },
                });
            }, 0);
            dispatch({ type: 'START_RUNNING' });
        }
    };

    const _clear = () => {
        clearInterval(intervalRef.current);
        dispatch({ type: 'RESET' });
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
