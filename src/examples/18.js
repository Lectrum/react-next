// Core
import React, { lazy, memo, useState, Suspense } from 'react';
import { render } from 'react-dom';

// Code splitting
const Tilt = lazy(() => import('./lazy/tilt'));

export const Parent = memo(() => {
    const [ isTiltShown, setIsTiltShown ] = useState(false);

    const buttonText = isTiltShown ? 'Спрятать плашку' : 'Показать плашку';

    return (
        <section className = 'example'>
            <button onClick = { () => setIsTiltShown(!isTiltShown) }>
                {buttonText}
            </button>
            <Suspense fallback = { <h1>Загружаю...</h1> }>
                {isTiltShown && <Tilt />}
            </Suspense>
        </section>
    );
});

render(<Parent />, document.getElementById('app'));
