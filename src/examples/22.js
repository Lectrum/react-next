// Core
import React, { lazy, useState, Suspense } from 'react';
import { render } from 'react-dom';

// Code splitting
const Tilt = lazy(() => import('./lazy/tilt'));

export const Example = () => {
    const [ isTiltShown, setIsTiltShown ] = useState(false);

    const buttonText = isTiltShown ? '🙈 Спрятать плашку' : '🐵 Показать плашку';

    return (
        <section className = 'tilt'>
            <button onClick = { () => setIsTiltShown(!isTiltShown) }>
                {buttonText}
            </button>
            <Suspense fallback = { <h1>Загружаю...</h1> }>
                {isTiltShown && <Tilt />}
            </Suspense>
        </section>
    );
};

render(<Example />, document.getElementById('app'));
