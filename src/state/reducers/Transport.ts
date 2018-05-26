import * as Redux from 'redux'
import { TransportMode, TransportData } from '../../types/Transport';
import {
    TRANSPORT_PLAY,
    TRANSPORT_STOP,
    TRANSPORT_PAUSE,
    TRANSPORT_LOCATION,
    TransportLocationProps
} from '../actions/Transport'

export type TransportAction = TransportLocationProps | Redux.Action;

type State = TransportData;

export const initialState: State = {
    currentLocation: 0,
    currentMode: TransportMode.Stop,
    endLocation: 0,
    startLocation: 0
};

function TransportReducer(state: State = initialState, action: TransportAction): State {

    switch (action.type) {
        case TRANSPORT_PLAY:
            return {...state, currentMode: TransportMode.Play};
        case TRANSPORT_PAUSE:
            return {...state, currentMode: TransportMode.Pause};
        case TRANSPORT_STOP:
            return {...state, currentMode: TransportMode.Stop};
        case TRANSPORT_LOCATION:
            return {...state, currentLocation: (<TransportLocationProps> action).location};
        default:
            return state;
    }
}

export default TransportReducer;