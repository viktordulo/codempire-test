import { Store } from 'redux';
import { ActionInterface, StateInterface } from './../interfaces';

const initialState: StateInterface = {
    isLeftOperandSet: false,
    leftOperand: '0',

    isRightOperandSet: false,
    rightOperand: '0',

    isOperatorSet: false,
    operator: '+',

    outputResult: 0
}

const inputReducer = (state: StateInterface = initialState, action: ActionInterface) => {

    if (action.type === 'digit') {
        state.outputResult = +action.button;
    }
    return state;
}

export default inputReducer;