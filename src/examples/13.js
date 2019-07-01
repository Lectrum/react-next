/**
 * Для проброса рефа дочерним компонентам используется функция forwardRef.
 * Хук useImperativeHandle используется только в связке с forwardRef.
 */
import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
    useEffect,
} from 'react';
import { render } from 'react-dom';

const Child = forwardRef((props, ref) => {
    const nameInputRef = useRef(null);

    useImperativeHandle(ref, () => {
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

    useEffect(() => {
        childRef.current.focusImperatively();
    }, [ isEditing ]);

    const buttonText = isEditing ? 'Заблокировать' : 'Разблокировать';

    return (
        <section className = 'counter'>
            <h1>{name}</h1>
            <Child
                _setName = { (event) => setName(event.target.value) }
                isEditing = { isEditing }
                name = { name }
                ref = { childRef }
            />
            <button onClick = { () => setIsEditing(!isEditing) }>
                {buttonText}
            </button>
        </section>
    );
};

render(<Parent />, document.getElementById('app'));
