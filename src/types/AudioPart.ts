export default interface AudioPart {
    id: string,
    name: string,
    waveFile: string,
    offset: number,
    timeSpan?: number
}
