// Core
import { useState } from 'react';

export const useCounter = (initialState = 0, step = 1) => {
    const [ count, setCount ] = useState(initialState);

    const _decrement = () => setCount((prevCount) => prevCount - step);
    const _reset = () => setCount(0);
    const _increment = () => setCount((prevCount) => prevCount + step);

    return {
        count,
        _increment,
        _decrement,
        _reset,
    };
};
