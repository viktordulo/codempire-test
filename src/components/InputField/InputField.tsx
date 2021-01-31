import React from 'react';
import { useSelector } from 'react-redux';

import style from './InputField.module.css'

const InputField: React.FC = () => {

    // Takes the output of the state.
    const output = useSelector((state: any) => state.InputField.outputResult);

    return (
        <div className = {style.wrapper}>
            <p className={style.text}>{output}</p>
        </div>
    );
}

export default InputField;