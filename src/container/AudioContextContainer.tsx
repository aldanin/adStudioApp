import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../types/index';
import * as actions from '../state/actions/AudioContext';
import webAudioTouchUnlock from 'web-audio-touch-unlock';

declare var webkitAudioContext: any;

export interface AudioContextContainerProps extends React.Props<AudioContextContainer> {
    audioContext: any,
    setAudioContextReady: (audioContext: any) => void
}

export interface AudioContextContainerState {
}

class AudioContextContainer extends React.Component<AudioContextContainerProps, AudioContextContainerState> {
    static defaultProps = {};

    renderContent = () => {
        return this.props.audioContext
            ? this.props.children
            : 'Loading...';
    }

    componentDidMount() {
        var context = new (AudioContext || webkitAudioContext)();

        webAudioTouchUnlock(context)
            .then(
                (unlocked: boolean) => {
                    if (unlocked) {
                        this.props.setAudioContextReady(context)
                    } else {
                        // There was no need for unlocking, devices other than iOS
                    }
                },
                (reason: any) => {
                    // console.error(reason);
                });
    }

    render() {
        return (
            <>{this.renderContent()}</>
        );
    }
}

export function mapStateToProps(state: StoreState) {
    const {audioContext, error} = state.audioContext
    return {
        audioContext,
        error
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        setAudioContextReady: (audioContext: any) => {
            dispatch(actions.setAudioContextReady(audioContext));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioContextContainer);