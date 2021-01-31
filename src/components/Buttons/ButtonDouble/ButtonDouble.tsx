import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionInterface, Button } from '../../../interfaces';

import style from './ButtonDouble.module.css';


// Component for zero button.
const ButtonDouble: React.FC<Button> = (props) => {

    const dispatch = useDispatch();

    // Gives the button type and button sign to the reducer when clicked.
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