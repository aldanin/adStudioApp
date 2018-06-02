import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
// import * as actions from '../state/actions/AudioContextProvider';
// import { StoreState } from '../types/index';
import styled from 'styled-components';
import Context from '../Context'

export interface AudioContextProviderProps extends React.Props<AudioContextProvider> {

}

export interface AudioContextProviderState {
    audioContext: any
}

class AudioContextProvider extends React.Component<AudioContextProviderProps, AudioContextProviderState> {
    static defaultProps = {};

    setAudioContext = (audioContext: any) => {
        this.setState({
            audioContext
        })
    }

    render() {
        return (
            <Context.Provider value={this.state.audioContext}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

// export function mapStateToProps({}: StoreState) {
//     return {};
// }
//
// export function mapDispatchToProps(dispatch: any) {
//     return {
//         func: () => {
//             // dispatch(actions.play());
//         },
//     };
// }

export default AudioContextProvider;

// export default connect(mapStateToProps, mapDispatchToProps)(AudioContextProvider);