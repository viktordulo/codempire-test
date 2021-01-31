import { ActionInterface, StateInterface } from './../interfaces';


// Starting point for the state.
const initialState: StateInterface = {
    isLeftOperandSet: false,
    leftOperand: '',
    rightOperand: '',

    isOperatorPressed: false,
    operator: '',

    isEqualPressed: false,
    isCommaPressed: false,

    outputResult: 0,

    numberInMemory: 0
}


/* Variable to save the memory state even when we clear the state with 'AC' button. */
let numberInMemory = 0;


// Manages the state when buttons are pressed.
const inputReducer = (state: StateInterface = Object.assign({}, initialState), action: ActionInterface) => {


    // Check all possible button types.
    switch (action.type) {
        case 'digit': // If number pressed.
            if (state.isEqualPressed && !state.isOperatorPressed && !state.isCommaPressed) {
                state.leftOperand = '';
                state.isLeftOperandSet = false;
            }
            if (!state.isLeftOperandSet) {
                state.leftOperand += action.button;
                state.outputResult = +state.leftOperand
            } else {
                state.rightOperand += action.button;
                state.outputResult = +state.rightOperand;
            }
            state.isEqualPressed = false;
            state.isOperatorPressed = false;

            return state;

        case 'operand': // If binary operator pressed (+, -, *, /).
            if (!state.isOperatorPressed) {
                if (!state.isLeftOperandSet) {
                    state.isLeftOperandSet = true;
                    state.isCommaPressed = false;
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

        case 'unary': // If unary operator pressed (=  %  ,  AC  +/-).
            switch (action.button) {
                case '=':
                    state.isEqualPressed = true;
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
                    state.operator = '';
                    state.isCommaPressed = false;
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
                    if (state.isEqualPressed) {
                        state.isLeftOperandSet = false;
                        state.leftOperand = '0';
                    }
                    if (!state.isCommaPressed) {
                        if (!state.isLeftOperandSet) {
                            state.leftOperand += '.';
                        } else {
                            state.rightOperand += '.';
                        }
                    }
                    state.isCommaPressed = true;

                    return state;

                case 'AC':
                    state = Object.assign({}, initialState);
                    return state;

                case '%':
                    if (state.isEqualPressed) {
                        state.leftOperand = (+state.leftOperand / 100).toString();
                        state.outputResult = +state.leftOperand;
                    }
                    if (!state.isLeftOperandSet || (state.isLeftOperandSet && state.isOperatorPressed)) {
                        state.leftOperand = (+state.leftOperand / 100).toString();
                        state.isLeftOperandSet = true;
                        state.outputResult = +state.leftOperand;
                        state.isOperatorPressed = false;
                    } else if (!state.isOperatorPressed && !state.isEqualPressed) {
                        switch (state.operator) {
                            case '-':
                                state.rightOperand = (+state.rightOperand * +state.leftOperand / 100).toString();
                                state.outputResult = +state.rightOperand;
                                break;

                            case '+':
                                state.rightOperand = (+state.rightOperand * +state.leftOperand / 100).toString();
                                state.outputResult = +state.rightOperand;
                                break;

                            case 'X':
                                state.rightOperand = (+state.rightOperand / 100).toString();
                                state.outputResult = +state.rightOperand;
                                break;

                            case '/':
                                state.rightOperand = (+state.rightOperand / 100).toString();
                                state.outputResult = +state.rightOperand;
                                break;

                            default:
                                break;
                        }
                    }
                    state.isEqualPressed = false;

                    return state;

                default:
                    return state;
            }

        case 'functional': // If memory button pressed.
            switch (action.button) {
                case 'm+':
                    numberInMemory += state.outputResult;
                    state.numberInMemory += numberInMemory;
                    return state;

                case 'm-':
                    numberInMemory -= state.outputResult;
                    state.numberInMemory -= numberInMemory;
                    return state;

                case 'mc':
                    numberInMemory = 0;
                    state.numberInMemory = numberInMemory;
                    return state;

                case 'mr':
                    state.outputResult = numberInMemory;
                    state.leftOperand = state.outputResult.toString();
                    state.isLeftOperandSet = true;
                    state.rightOperand = '';
                    state.operator = '';
                    state.isCommaPressed = false;
                    return state;

                default:
                    return state;
            }


        default:
            return state;

    }

}

export default inputReducer;