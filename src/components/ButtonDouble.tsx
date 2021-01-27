import React from 'react';

import style from './ButtonDouble.module.css';

interface Button {
    text: string;
}

const ButtonDouble: React.FC<Button> = (props) => {
    return (
        <div className = {style.wrapper}>
            <p className = {style.text}>{props.text}</p>
        </div>
    );
}

export default ButtonDouble;