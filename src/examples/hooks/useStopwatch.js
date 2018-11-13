// Core
import { useReducer, useRef, useEffect } from 'react';

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

export const useStopWatch = () => {
    const [{ isRunning, lapse }, dispatch ] = useReducer(stopwatchReducer, {
        isRunning: false,
        lapse:     0,
    });
    const intervalRef = useRef(null);

    const toggleRun = () => {
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

    const clear = () => {
        clearInterval(intervalRef.current);
        dispatch({ type: 'RESET' });
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return { isRunning, lapse, toggleRun, clear };
};
