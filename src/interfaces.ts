export interface ActionInterface {
    type: 'digit' | 'operand' | 'functional' | 'unary';
    button: string;
}

export interface Button {
    text: string;
    type: 'digit' | 'operand' | 'functional' | 'unary';
    background?: 'orange' | 'silver';
}

export interface StateInterface {
    isLeftOperandSet: boolean,
    leftOperand: string,

    isRightOperandSet: boolean,
    rightOperand: string,

    isOperatorPressed: boolean,
    operator: string,

    outputResult: number
}