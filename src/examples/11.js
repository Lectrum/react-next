// Core
import React, {
    forwardRef,
    useRef,
    useImperativeMethods,
    useState,
    useEffect,
} from 'react';
import { render } from 'react-dom';

const Child = forwardRef((props, ref) => {
    const nameInputRef = useRef(null);

    useImperativeMethods(ref, () => {
        return {
            focusImperatively: () => {
                nameInputRef.current.focus();
            },
        };
    });

    return (
        <input
            disabled = { !props.isEditing }
            ref = { nameInputRef }
            value = { props.name }
            onChange = { props._setName }
        />
    );
});

const Parent = () => {
    const [ name, setName ] = useState('🎅🏼 Дед Мороз');
    const [ isEditing, setIsEditing ] = useState(false);
    const childRef = useRef(null);

    const _setName = (event) => setName(event.target.value);
    const _toggleIsEditing = () => setIsEditing(!isEditing);

    useEffect(
        () => {
            childRef.current.focusImperatively();
        },
        [ isEditing ],
    );

    const buttonText = isEditing ? 'Заблокировать' : 'Разблокировать';

    return (
        <section className = 'example'>
            <h1>{name}</h1>
            <Child
                _setName = { _setName }
                isEditing = { isEditing }
                name = { name }
                ref = { childRef }
            />
            <button onClick = { _toggleIsEditing }>{buttonText}</button>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
