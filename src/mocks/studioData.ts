import SongData from '../types/SongData'
import { TransportData, TransportMode } from '../types/Transport';

export const DENO_DATA: SongData = {
    name: 'My Song',
    studio: {
        audioTracks: [{
            name: 'Track 1',
            parts: [
                {
                    name: 'TR1-PT1',
                    offset: 0,
                    timeSpan: 0,
                    waveFile: ''
                }
            ]
        }],
        mixer: {
            master: {
                volume: 10
            },
            mixerAudioTracks: [
                {
                    name: 'Track 1',
                    volume: 10
                }
            ]
        },
        transport: {
            currentMode: TransportMode.Stop,
            startLocation: 0,
            endLocation: 0,
            currentLocation: 0
        }
    }
}