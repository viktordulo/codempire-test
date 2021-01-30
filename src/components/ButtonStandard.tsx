import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ActionInterface } from '../interfaces';

import style from './ButtonStandard.module.css';


const ButtonStandard: React.FC<Button> = (props) => {

    const dispatch = useDispatch();

    const makeAction = () => {
        const action: ActionInterface = {
            type: props.type,
            button: props.text
        }
        dispatch(action);
    }

    // Adding different background colors for buttons
    let bgColor = `${style.wrapper}`;
    if (props.background === 'silver') bgColor += ` ${style.silver}`;
    if (props.background === 'orange') bgColor += ` ${style.orange}`;

    
    return (
        <div className={bgColor} onClick={makeAction}>
            <p className={style.text}>{props.text}</p>
        </div>
    );
}

export default ButtonStandard;