import * as React from 'react';
import styled from 'styled-components';

export interface AudioMixerProps extends React.Props<AudioMixer> {

}

export interface AudioMixerState {
}

class AudioMixer extends React.PureComponent<AudioMixerProps, AudioMixerState> {
    static defaultProps = {};

    render() {
        return (
            <div>AudioMixer component</div>
        );
    }
}

export default AudioMixer;