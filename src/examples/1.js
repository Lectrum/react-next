// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    state = {
        count: 0,
    };

    _increment = () => this.setState(({ count }) => ({ count: count + 1 }));
    _reset = () => this.setState({ count: 0 });
    _decrement = () => this.setState(({ count }) => ({ count: count + 1 }));

    render() {
        const { count } = this.state;

        return (
            <section className = 'example'>
                <h1>Счётчик: {count}</h1>
                <div>
                    <button onClick = { this._increment }>+</button>
                    <button onClick = { this._reset }>Обнулить</button>
                    <button onClick = { this._decrement }>-</button>
                </div>
            </section>
        );
    }
}

render(<Parent />, document.getElementById('app'));
