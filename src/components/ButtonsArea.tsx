import React from 'react';
import ButtonDouble from './ButtonDouble';

import style from './ButtonsArea.module.css';
import ButtonStandard from './ButtonStandard';

const ButtonsArea: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <ButtonStandard text='AC' background='silver' type='unary' />
            <ButtonStandard text='+/-' background='silver' type='unary' />
            <ButtonStandard text='%' background='silver' type='unary' />
            <ButtonStandard text='/' background='orange' type='operand' />
            <ButtonStandard text='mc' type='functional' />
            <ButtonStandard text='mr' type='functional' />
            <ButtonStandard text='m-' type='functional' />
            <ButtonStandard text='m+' background='orange' type='functional' />
            <ButtonStandard text='7' type='digit' />
            <ButtonStandard text='8' type='digit' />
            <ButtonStandard text='9' type='digit' />
            <ButtonStandard text='X' background='orange' type='operand' />
            <ButtonStandard text='4' type='digit' />
            <ButtonStandard text='5' type='digit' />
            <ButtonStandard text='6' type='digit' />
            <ButtonStandard text='-' background='orange' type='operand' />
            <ButtonStandard text='1' type='digit' />
            <ButtonStandard text='2' type='digit' />
            <ButtonStandard text='3' type='digit' />
            <ButtonStandard text='+' background='orange' type='operand' />
            <ButtonDouble text='0' type='digit'/>
            <ButtonStandard text=',' type='unary' />
            <ButtonStandard text='=' background='orange' type='unary' />
        </div>
    );
}

export default ButtonsArea;