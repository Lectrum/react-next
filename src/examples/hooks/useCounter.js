// Core
import { useState } from 'react';

export const useCounter = (initialState = 0, step = 1) => {
    const [ count, setCount ] = useState(initialState);

    const decrement = () => setCount((prevCount) => prevCount - step);
    const reset = () => setCount(0);
    const increment = () => setCount((prevCount) => prevCount + step);

    return {
        count,
        decrement,
        reset,
        increment,
    };
};
