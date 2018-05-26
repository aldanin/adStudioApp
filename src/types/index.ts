import * as Transport from './Transport'
import { TransportData } from './Transport';
import AudioTrackData from '../types/AudioTrack';

export interface StoreState {
    transport: TransportData,
    multitracker: {
        data: AudioTrackData[],
        isDataLoaded: boolean
    }
}