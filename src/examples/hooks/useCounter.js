// Core
import { useState } from 'react';

export const useCounter = (initialState = 0, step = 1) => {
    const [ count, setCount ] = useState(initialState);

    const _increment = () => setCount(count + step);
    const _decrement = () => setCount(count - step);
    const _reset = () => setCount(0);

    return {
        count,
        _increment,
        _decrement,
        _reset,
    };
};
