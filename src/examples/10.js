// Core
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [ name, setName ] = useState('🎅🏼 Дед Мороз');
    const [ isEditing, setIsEditing ] = useState(false);
    const nameInputRef = useRef(null);

    const _setName = (event) => setName(event.target.value);
    const _toggleIsEditing = () => setIsEditing(!isEditing);

    useEffect(
        () => {
            nameInputRef.current.focus();
        },
        [ isEditing ],
    );

    const buttonText = isEditing ? 'Заблокировать' : 'Разблокировать';

    return (
        <section className = 'counter'>
            <h1>{name}</h1>
            <input
                disabled = { !isEditing }
                ref = { nameInputRef }
                value = { name }
                onChange = { _setName }
            />
            <button onClick = { _toggleIsEditing }>{buttonText}</button>
        </section>
    );
};

render(<Counter />, document.getElementById('app'));
