import SongData from '../types/SongData'
import { TransportData, TransportMode } from '../types/Transport';

export const DENO_DATA: SongData = {
    id: 'song-1',
    name: 'My Song',
    studio: {
        audioTracks: [{
            id: 'song-1-audio-track-1',
            name: 'Track 1',
            parts: [
                {
                    id: 'song-1-audio-part-1-1',
                    name: 'TR1-PT1',
                    offset: 0,
                    timeSpan: 0,
                    waveFile: 'assets/01 Op. 2, no. 1 I. Allegro.mp3'
                }
            ]
        }, {
            id: 'song-1-audio-track-2',
            name: 'Track 1',
            parts: [
                {
                    id: 'song-1-audio-part-2-1',
                    name: 'TR1-PT1',
                    offset: 0,
                    timeSpan: 0,
                    waveFile: 'assets/01 Op. 2, no. 1 I. Allegro.mp3'
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

export const getAudioTracksData = () => {
    return DENO_DATA.studio.audioTracks;
}