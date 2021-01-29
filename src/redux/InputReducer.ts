import { Store } from 'redux';
import { ActionInterface } from './../interfaces';

const initialState = {
    leftOperand: 0,
    rightOperand: 0,
    operator: '+'
}

const inputReducer = (state: any = initialState, action: ActionInterface) => {

    console.log(initialState.leftOperand)
    return state;
}

export default inputReducer;