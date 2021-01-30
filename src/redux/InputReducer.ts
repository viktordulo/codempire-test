
import { ActionInterface, StateInterface } from './../interfaces';

const initialState: StateInterface = {
    isLeftOperandSet: false,
    leftOperand: '',

    isRightOperandSet: false,
    rightOperand: '',

    isOperatorPressed: false,
    operator: '',

    outputResult: 0
}

const inputReducer = (state: StateInterface = Object.assign({}, initialState), action: ActionInterface) => {

    switch (action.type) {
        case 'digit':
            state.isOperatorPressed = false;
            if (!state.isLeftOperandSet) {
                state.leftOperand += action.button;
                state.outputResult = +state.leftOperand
            } else {
                state.rightOperand += action.button;
                state.outputResult = +state.rightOperand;
            }

            return state;

        case 'operand':
            if (!state.isOperatorPressed) {
                if (!state.isLeftOperandSet) {
                    state.isLeftOperandSet = true;
                } else {
                    switch (state.operator) {
                        case '+':
                            state.outputResult = Math.round((+state.leftOperand + +state.rightOperand) * 100000) / 100000;
                            state.leftOperand = state.outputResult.toString();
                            state.rightOperand = '';
                            break;
                        case '-':
                            state.outputResult = Math.round((+state.leftOperand - +state.rightOperand) * 100000) / 100000;
                            state.leftOperand = state.outputResult.toString();
                            state.rightOperand = '';
                            break;
                        case 'X':
                            state.outputResult = Math.round((+state.leftOperand * +state.rightOperand) * 100000) / 100000;
                            state.leftOperand = state.outputResult.toString();
                            state.rightOperand = '';
                            break;
                        case '/':
                            state.outputResult = Math.round(+state.leftOperand / +state.rightOperand * 100000) / 100000;
                            state.leftOperand = state.outputResult.toString();
                            state.rightOperand = '';
                            break;
                        default:
                            break;
                    }
                }
            }
            state.operator = action.button;
            state.isOperatorPressed = true;

            return state;

        case 'unary':
            switch (action.button) {
                case '=':
                    if (state.operator && state.rightOperand) {
                        switch (state.operator) {
                            case '+':
                                state.outputResult = Math.round((+state.leftOperand + +state.rightOperand) * 100000) / 100000;
                                state.leftOperand = state.outputResult.toString();
                                state.rightOperand = '';
                                break;
                            case '-':
                                state.outputResult = Math.round((+state.leftOperand - +state.rightOperand) * 100000) / 100000;
                                state.leftOperand = state.outputResult.toString();
                                state.rightOperand = '';
                                break;
                            case 'X':
                                state.outputResult = Math.round((+state.leftOperand * +state.rightOperand) * 100000) / 100000;
                                state.leftOperand = state.outputResult.toString();
                                state.rightOperand = '';
                                break;
                            case '/':
                                state.outputResult = Math.round(+state.leftOperand / +state.rightOperand * 100000) / 100000;
                                state.leftOperand = state.outputResult.toString();
                                state.rightOperand = '';
                                break;
                            default:
                                break;
                        }
                    }
                    return state;

                case '+/-':
                    if (!state.isLeftOperandSet || (!state.rightOperand && state.isLeftOperandSet)) {
                        state.leftOperand = (+state.leftOperand * -1).toString();
                        state.outputResult = +state.leftOperand;
                    } else {
                        state.rightOperand = (+state.rightOperand * -1).toString();
                        state.outputResult = +state.rightOperand;
                    }

                    return state;

                case ',':

                    return state;

                case 'AC':
                    state = Object.assign({}, initialState);
                    return state;

                default:
                    return state;
            }

        default:
            return state;

    }

}

export default inputReducer;