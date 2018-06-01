import * as React from 'react';
import styled from 'styled-components';
import AudioTrackData from '../../../types/AudioTrack';

export interface AudioTrackProps extends React.Props<AudioTrack> {
    data: AudioTrackData
}

export interface AudioTrackState {
}

const Track = styled.div`
    height: 80px;
    border-bottom: solid #c7c7c7 1px;
`;

class AudioTrack extends React.PureComponent<AudioTrackProps, AudioTrackState> {
    static defaultProps = {

    };

    render() {
        console.log('=>', this.props)
        return (
            <Track>AudioTrack component</Track>
        );
    }
}

export default AudioTrack;