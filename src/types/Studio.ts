import AudioTrackData from './AudioTrack'
import MixerData from './Mixer'
import { TransportData } from './Transport';

export default interface StudioData {
    audioTracks: AudioTrackData[],
    mixer: MixerData,
    transport: TransportData
}
