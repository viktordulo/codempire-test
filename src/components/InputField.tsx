import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './InputField.module.css'

const InputField: React.FC = () => {

    const output = useSelector((state:any) => state.InputField.outputResult);

    return (
        <div className = {style.wrapper}>
            <p className={style.text}>{output}</p>
        </div>
    );
}

export default InputField;