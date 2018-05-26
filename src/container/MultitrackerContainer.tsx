import * as React from 'react'
import Transport from '../components/studio/Transport';
import * as actions from '../state/actions/Multitracker';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import styled from 'styled-components'
import AudioTrackData from '../types/AudioTrack';
import Multitracker from '../components/studio/Multitracker'

export interface MultitrackerContainerProps extends React.Props<MultitrackerContainer> {
    data: AudioTrackData[],
    isDataLoaded: boolean,
    loadAudioTrackData: (location: number) => void,
}

const Div = styled.div`
    color: green;
`;

class MultitrackerContainer extends React.Component<MultitrackerContainerProps, {}> {
    static defaultProps: Partial<MultitrackerContainerProps> = {
        data: [],
        isDataLoaded: false
    };

    constructor(props: MultitrackerContainerProps) {
        super(props)
    }

    render() {
        console.log()
        return (
            <Multitracker
                data={this.props.data}
            />
        )
    }

    componentDidMount() {
        this.props.loadAudioTrackData(0)
    }
}

export function mapStateToProps({multitracker}: StoreState) {
    return {
        data: multitracker.data,
        isDataLoaded: multitracker.isDataLoaded
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        loadAudioTrackData: (location: number) => {
            dispatch(actions.loadAudioTrackData(location));
        },
        // onPause: () => {
        //     dispatch(actions.pause());
        // },
        // onStop: () => {
        //     dispatch(actions.stop());
        // },
        // setLocation: (location: any) => {
        //     dispatch(actions.setLocation(location));
        // },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MultitrackerContainer);
// export default MultitrackerContainer;
