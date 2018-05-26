import * as React from 'react';
import styled from 'styled-components';
import AudioTrackData from '../../../types/AudioTrack';

export interface AudioTrackProps extends React.Props<AudioTrack> {
    data: AudioTrackData
}

export interface AudioTrackState {
}

class AudioTrack extends React.PureComponent<AudioTrackProps, AudioTrackState> {
    static defaultProps = {

    };

    render() {
        console.log('=>', this.props)
        return (
            <div>AudioTrack component</div>
        );
    }
}

export default AudioTrack;