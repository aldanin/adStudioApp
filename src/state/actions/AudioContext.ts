import * as Redux from 'redux'

export const AUDIO_CONTEXT_READY = 'AudioContext/READY';
export const AUDIO_CONTEXT_ERROR = 'AudioContext/ERROR';

export interface AudioContextActionProps extends Redux.Action {
    audioContext: AudioContext,
}

export function setAudioContextReady(audioContext: AudioContext): AudioContextActionProps {
    return {
        type: AUDIO_CONTEXT_READY,
        audioContext
    }
}