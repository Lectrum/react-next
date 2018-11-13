// Core
import React from 'react';
import { render } from 'react-dom';

// Hooks
import { useStopWatch } from './hooks';

const Stopwatch = () => {
    /**
     * Вынесение логики в кастомные хуки позволяет элегантным путём решить проблему,
     * которую пытались решить паттерны Higher Order Component и Render Props.
     */
    const watch1 = useStopWatch();
    const watch2 = useStopWatch();

    const buttonText1 = watch1.isRunning ? '🏁 Стоп' : '🎬 Старт';
    const buttonText2 = watch2.isRunning ? '🏁 Стоп' : '🎬 Старт';

    return (
        <div className = 'stopwatch'>
            <code>{watch1.lapse} мс</code>
            <button onClick = { watch1.toggleRun }>{buttonText1}</button>
            <button onClick = { watch1.clear }>Очистить</button>
            <hr />
            <code className = 'difference'>
                Разница: {watch1.lapse - watch2.lapse} мс
            </code>
            <hr />
            <code>{watch2.lapse} мс</code>
            <button onClick = { watch2.toggleRun }>{buttonText2}</button>
            <button onClick = { watch2.clear }>Очистить</button>
        </div>
    );
};

render(<Stopwatch />, document.getElementById('app'));
