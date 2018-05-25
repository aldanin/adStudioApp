import * as React from 'react';
import styled from 'styled-components';

export interface AudioTrackProps extends React.Props<AudioTrack> {

}

export interface AudioTrackState {
}

class AudioTrack extends React.PureComponent<AudioTrackProps, AudioTrackState> {
    static defaultProps = {};

    render() {
        return (
            <div>AudioTrack component</div>
        );
    }
}

export default AudioTrack;