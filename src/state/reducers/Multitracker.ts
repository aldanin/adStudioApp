import * as Redux from 'redux'
import * as actions from '../actions/Multitracker'
import AudioTrackData from '../../types/AudioTrack';
import { getAudioTracksData } from '../../mocks/studioData'

export type MultitrackerAction = actions.MultitrackLoadDataProps | Redux.Action;

type State = {
    data: AudioTrackData[],
    isDataLoaded: boolean,
    error: string
};

export const initialState: State = {
    data: [],
    isDataLoaded: false,
    error: null
};

function MultitrackerReducer(state: State = initialState, action: MultitrackerAction): State {

    switch (action.type) {
        case actions.MULTITRACKER_LOAD_DATA:
            return {...state, data: getAudioTracksData(), isDataLoaded: true};
        case actions.MULTITRACKER_LOAD_ERROR:
            return {...state, error: 'error'};
        default:
            return state;
    }
}

export default MultitrackerReducer;