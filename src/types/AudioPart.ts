export default interface AudioPart {
    name: string,
    waveFile: string,
    offset: number,
    timeSpan?: number
}
