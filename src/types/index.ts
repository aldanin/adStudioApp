import * as Transport from './Transport'
import { TransportData } from './Transport';
import AudioTrackData from '../types/AudioTrack';

export interface StoreState {
    audioContext: {
        audioContext: any;
        error: Error;
    }
    transport: TransportData,
    multitracker: {
        data: AudioTrackData[],
        isDataLoaded: boolean
    }
}