import * as Redux from 'redux'
import * as AudioTrackData from '../../types/AudioTrack'
import * as Transport from '../../types/Transport';
import { TRANSPORT_PLAY } from './Transport';

export const MULTITRACKER_LOAD_DATA = 'Multitracker/LOAD_DATA';
export const MULTITRACKER_LOAD_ERROR = 'Multitracker/LOAD_ERROR';

export interface MultitrackLoadDataProps extends Redux.Action {
    payload: {
        location: number
    };
}

export function loadAudioTrackData(location: number): MultitrackLoadDataProps {
    return {
        type: MULTITRACKER_LOAD_DATA,
        payload: {
            location
        }
    };
}