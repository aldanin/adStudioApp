import AudioPartData from './AudioPart'

export default interface AudioTrack {
    id: string,
    name: string,
    parts: AudioPartData[]
}