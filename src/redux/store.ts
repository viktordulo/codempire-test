import {combineReducers, createStore} from 'redux';
import buttonsReducer from './ButtonsReducer';
import inputReducer from './InputReducer';

let reducers = combineReducers({
    ButtonsArea: buttonsReducer,
    InputField: inputReducer
})

let store = createStore(reducers);

export default store;