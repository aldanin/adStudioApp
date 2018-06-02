import { combineReducers } from 'redux';
import Transport from './Transport'
import MultitrackerReducer from './Multitracker'
import AudioContextreducer from './AudioContext'

const rootReducer = combineReducers({
    transport: Transport,
    multitracker: MultitrackerReducer,
    audioContext: AudioContextreducer
});

export default rootReducer