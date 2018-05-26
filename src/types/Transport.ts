export interface TransportData {
    currentMode: TransportMode,
    currentLocation: number,
    startLocation: number,
    endLocation: number,
}

export enum TransportMode {
    Stop = 1,
    Play = 2,
    Pause = 3,
}