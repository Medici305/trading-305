import { combineReducers } from 'redux';
import marketReducer from './marketList';

const rootReducer = combineReducers({
    list: marketReducer
})

export default rootReducer;