import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionInterface, Button } from '../interfaces';

import style from './ButtonDouble.module.css';


const ButtonDouble: React.FC<Button> = (props) => {

    const dispatch = useDispatch();

    const makeAction = () => {
        const action: ActionInterface = {
            type: props.type,
            button: props.text
        }
        dispatch(action);
    }

    return (
        <div className = {style.wrapper} onClick={makeAction}>
            <p className = {style.text}>{props.text}</p>
        </div>
    );
}

export default ButtonDouble;