import React from 'react';
import { Button } from '../interfaces';

import style from './ButtonDouble.module.css';


const ButtonDouble: React.FC<Button> = (props) => {
    return (
        <div className = {style.wrapper}>
            <p className = {style.text}>{props.text}</p>
        </div>
    );
}

export default ButtonDouble;