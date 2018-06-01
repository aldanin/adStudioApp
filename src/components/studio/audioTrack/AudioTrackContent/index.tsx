import * as React from 'react';
import styled from 'styled-components';
import AudioTrackData from '../../../../types/AudioTrack';

export interface AudioTrackContentProps extends React.Props<AudioTrackContent> {
    data?: AudioTrackContent
}

export interface AudioTrackContentState {
}

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

class AudioTrackContent extends React.PureComponent<AudioTrackContentProps, AudioTrackContentState> {
    static defaultProps = {

    };

    render() {
        console.log('=>', this.props)
        return (
            <Container>+</Container>
        );
    }
}

export default AudioTrackContent;