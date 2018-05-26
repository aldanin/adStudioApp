import * as Redux from 'redux'
import * as Transport from '../../types/Transport'

export const TRANSPORT_PLAY = 'Transport/PLAY';
export const TRANSPORT_PAUSE = 'Transport/PAUSE';
export const TRANSPORT_STOP = 'Transport/STOP';
export const TRANSPORT_LOCATION = 'Transport/LOCATION;'

export interface TransportModeProps extends Redux.Action {
    payload: Transport.TransportMode;
}

export interface TransportLocationProps extends Redux.Action {
    location: number;
}

export function play(): Redux.Action {
    return {
        type: TRANSPORT_PLAY,
    };
}

export function pause(): Redux.Action {
    return {
        type: TRANSPORT_PAUSE,
    };
}

export function stop(): Redux.Action {
    return {
        type: TRANSPORT_STOP,
    };
}

export function setLocation(location: number): TransportLocationProps {
    return {
        type: TRANSPORT_LOCATION,
        location
    };
}