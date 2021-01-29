import React, { useState } from 'react';
import { Button } from '../interfaces';

import style from './ButtonStandard.module.css';


const ButtonStandard: React.FC<Button> = (props) => {

    const [leftOperand, setLeftOperand] = useState(0);

    const makeAction = () => {
        console.log(props.text);
        setLeftOperand(+props.text);
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