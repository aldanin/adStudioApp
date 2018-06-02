import * as Redux from 'redux'
import * as actions from '../actions/AudioContext'
import AudioTrackData from '../../types/AudioTrack';
import { getAudioTracksData } from '../../mocks/studioData';

export type AudioContextAction = actions.AudioContextActionProps | Redux.Action;

type State = {
    audioContext: any,
    error: string
};

export const initialState: State = {
    audioContext: null,
    error: null
};

function AudioContextReducer(state: State = initialState, action: AudioContextAction): State {

    switch (action.type) {
        case actions.AUDIO_CONTEXT_READY:
            return {...state, audioContext: (<actions.AudioContextActionProps> action).audioContext};
        case actions.AUDIO_CONTEXT_ERROR:
            return {...state, error: 'error'};
        default:
            return state;
    }
}

export default AudioContextReducer;