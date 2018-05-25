import AudioPart from './AudioPart'

export default interface AudioTrack {
    name: string,
    parts: AudioPart[]
}