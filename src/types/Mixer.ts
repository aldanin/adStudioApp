import MixerAudioTrackData from './MixerAudioTrackData'
import MasterTrack from './MixerMasterTrackData'

export default interface Mixer {
    master: MasterTrack,
    mixerAudioTracks: MixerAudioTrackData[]
}
