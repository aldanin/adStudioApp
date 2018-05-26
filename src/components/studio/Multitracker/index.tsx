import * as React from 'react';
import styled from 'styled-components';
import AudioTrack from '../audioTrack'
import AudioTrackData from '../../../types/AudioTrack';

export interface MultitrackerComponentProps extends React.Props<MultitrackerComponent> {
    data: AudioTrackData[]
}

export interface MultitrackerComponentState {
}

class MultitrackerComponent extends React.PureComponent<MultitrackerComponentProps, MultitrackerComponentState> {
    static defaultProps = {
        audioTracks: []
    };

    render() {
        return (
            <div>
                {this.props.data.map((audioTrackData) => {
                    console.log('ddd', audioTrackData, audioTrackData.id)
                    return <AudioTrack data={audioTrackData} key={audioTrackData.id}/>
                })}
            </div>
        );
    }
}

export default MultitrackerComponent;