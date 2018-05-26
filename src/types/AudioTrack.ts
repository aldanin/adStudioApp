import AudioPartData from './AudioPart'

export default interface AudioTrack {
    name: string,
    parts: AudioPartData[]
}