import * as React from 'react';
import styled from 'styled-components';
import AudioTrack from '../audioTrack'
import AudioTrackData from '../../../types/AudioTrack';
import Timeline from './Timeline'

export interface MultitrackerComponentProps extends React.Props<MultitrackerComponent> {
    data: AudioTrackData[]
}

export interface MultitrackerComponentState {
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b4b3b9;
    margin: auto;
    width: calc(100% - 20px);
    height: 100%;
    border: outset 3px #bfbfbf;
`;

const MultiTracks = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

class MultitrackerComponent extends React.PureComponent<MultitrackerComponentProps, MultitrackerComponentState> {
    static defaultProps = {
        audioTracks: []
    };

    private audioContext = AudioContext;

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Container>
                <Timeline/>
                <MultiTracks>
                    {this.props.data.map((audioTrackData) => {
                        console.log('ddd', audioTrackData, audioTrackData.id)
                        return <AudioTrack data={audioTrackData} key={audioTrackData.id}/>
                    })}
                </MultiTracks>
            </Container>
        );
    }
}

export default MultitrackerComponent;