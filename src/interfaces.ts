// Define what information we should receive in the action.
export interface ActionInterface {

    // Possible button types.
    type: 'digit' | 'operand' | 'functional' | 'unary';

    // Button sign.
    button: string;
}


// Define the possible button properties.
export interface Button {

    // Sign inside the button.
    text: string;

    // Type of the button.
    type: 'digit' | 'operand' | 'functional' | 'unary';

    // Background of the button for the design.
    background?: 'orange' | 'silver';
}

export interface StateInterface {

    // Checks if the user is already set the first number.
    isLeftOperandSet: boolean,

    // First number value.
    leftOperand: string,

    // Second number value.
    rightOperand: string,

    // Checks if the operator was already pressed (+, -, X, /).
    isOperatorPressed: boolean,

    // Saves the last operator pressed.
    operator: string,

    // Checks if equal sign was pressed previously.
    isEqualPressed: boolean,

    // Checks if the user already used comma in this number.
    isCommaPressed: boolean,

    // Saves the result on the screen.
    outputResult: number,

    // Saves the number in memory.
    numberInMemory: number
}
