import { combineReducers } from 'redux';
import Transport from './Transport'
import MultitrackerReducer from './Multitracker'

const rootReducer = combineReducers({
    transport: Transport,
    multitracker: MultitrackerReducer
});

export default rootReducer