import Song from '../types/Song'

export const DENO_DATA: Song = {
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
        }
    }
}