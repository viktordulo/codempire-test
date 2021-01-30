export interface ActionInterface {
    type: 'digit' | 'operand' | 'functional';
    button: string;
}

export interface Button {
    text: string;
    type: 'digit' | 'operand' | 'functional'
    background?: 'orange' | 'silver';
}

export interface StateInterface {
    isLeftOperandSet: boolean,
    leftOperand: string,

    isRightOperandSet: boolean,
    rightOperand: string,

    isOperatorSet: boolean,
    operator: string,

    outputResult: number
}