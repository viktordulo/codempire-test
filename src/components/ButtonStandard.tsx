import React from 'react';

import style from './ButtonStandard.module.css';

interface Button {
    text: string;
    background?: 'orange' | 'silver';
}

const ButtonStandard: React.FC<Button> = (props) => {

    let bgColor = `${style.wrapper}`;
    if (props.background === 'silver') bgColor += ` ${style.silver}`;
    if (props.background === 'orange') bgColor += ` ${style.orange}`;
    return (
        <div className={bgColor}>
            <p className={style.text}>{props.text}</p>
        </div>
    );
}

export default ButtonStandard;