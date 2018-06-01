import * as React from 'react';
import styled from 'styled-components';
import AudioTrackData from '../../../types/AudioTrack';
import Controls from './AudioTrackControls'
import Content from './AudioTrackContent'

export interface AudioTrackProps extends React.Props<AudioTrack> {
    data: AudioTrackData
}

export interface AudioTrackState {
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    border-bottom: solid #c7c7c7 1px;
`;

class AudioTrack extends React.PureComponent<AudioTrackProps, AudioTrackState> {
    static defaultProps = {

    };

    render() {
        console.log('=>', this.props)
        return (
            <Container>AudioTrack component
                <Controls/>
                <Content/>
            </Container>
        );
    }
}

export default AudioTrack;