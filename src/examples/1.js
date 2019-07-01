import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
    state = {
        count: 0,
    };

    _decrement = () => this.setState(({ count }) => ({ count: count - 1 }));
    _reset = () => this.setState({ count: 0 });
    _increment = () => this.setState(({ count }) => ({ count: count + 1 }));

    render() {
        const { count } = this.state;

        return (
            <section className = 'counter'>
                <h1>Счётчик: {count}</h1>
                <button onClick = { this._decrement }>-</button>
                <button onClick = { this._reset }>Обнулить</button>
                <button onClick = { this._increment }>+</button>
            </section>
        );
    }
}

render(<Counter />, document.getElementById('app'));
