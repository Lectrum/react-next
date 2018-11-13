// Core
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Parent = () => {
    const [ name, setName ] = useState('🎅🏼 Санта Клаус');
    const [ isEditing, setIsEditing ] = useState(false);
    const nameInputRef = useRef(null);

    const _setName = (event) => setName(event.target.value);
    const _setIsEditing = () => setIsEditing(!isEditing);

    useEffect(
        () => {
            nameInputRef.current.focus();
        },
        [ isEditing ],
    );

    const buttonText = isEditing ? 'Заблокировать' : 'Разблокировать';

    return (
        <section className = 'example'>
            <h1>{name}</h1>
            <input
                disabled = { !isEditing }
                ref = { nameInputRef }
                value = { name }
                onChange = { _setName }
            />
            <button onClick = { _setIsEditing }>{buttonText}</button>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
