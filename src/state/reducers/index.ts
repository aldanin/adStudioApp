import { combineReducers } from 'redux';
import Transport from './Transport'

const rootReducer = combineReducers({
    transport: Transport
});

export default rootReducer