import React from 'react';
import ButtonDouble from './ButtonDouble';

import style from './ButtonsArea.module.css';
import ButtonStandard from './ButtonStandard';

const ButtonsArea: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <ButtonStandard text='AC' background='silver' />
            <ButtonStandard text='+/-' background='silver' />
            <ButtonStandard text='%' background='silver' />
            <ButtonStandard text='/' background='orange' />
            <ButtonStandard text='mc' />
            <ButtonStandard text='mr' />
            <ButtonStandard text='m-' />
            <ButtonStandard text='m+' background='orange' />
            <ButtonStandard text='7' />
            <ButtonStandard text='8' />
            <ButtonStandard text='9' />
            <ButtonStandard text='X' background='orange' />
            <ButtonStandard text='4' />
            <ButtonStandard text='5' />
            <ButtonStandard text='6' />
            <ButtonStandard text='-' background='orange' />
            <ButtonStandard text='1' />
            <ButtonStandard text='2' />
            <ButtonStandard text='3' />
            <ButtonStandard text='+' background='orange' />
            <ButtonDouble text='0'/>
            <ButtonStandard text=',' />
            <ButtonStandard text='=' background='orange'/>
        </div>
    );
}

export default ButtonsArea;