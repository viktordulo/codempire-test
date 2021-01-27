import React from 'react';

import style from './InputField.module.css'

const InputField: React.FC = () => {
    return (
        <div className = {style.wrapper}>
            <p className={style.text}>0</p>
        </div>
    );
}

export default InputField;