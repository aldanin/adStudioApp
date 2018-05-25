import MixerAudioTrack from './MixerAudioTrack'
import MasterTrack from './MixerMasterTrack'

export default interface Mixer {
    master: MasterTrack,
    mixerAudioTracks: MixerAudioTrack[]
}
