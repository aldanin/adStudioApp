import * as React from 'react';
import styled from 'styled-components';
import AudioTrackData from '../../../../types/AudioTrack';

export interface AudioTrackControlsProps extends React.Props<AudioTrackControls> {
    data?: AudioTrackControls
}

export interface AudioTrackControlsState {
}

const Track = styled.div`
    width: 120px;
    height: 100%;
    border-right: solid #c7c7c7 3px;
`;

class AudioTrackControls extends React.PureComponent<AudioTrackControlsProps, AudioTrackControlsState> {
    static defaultProps = {

    };

    render() {
        console.log('=>', this.props)
        return (
            <Track>_</Track>
        );
    }
}

export default AudioTrackControls;