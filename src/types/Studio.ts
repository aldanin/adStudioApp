import AudioTrack from './AudioTrack'
import Mixer from './Mixer'

export default interface StudioProps {
    audioTracks: AudioTrack[],
    mixer: Mixer
}
