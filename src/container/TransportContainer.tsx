import * as React from 'react'
import Transport from '../components/studio/Transport';
import * as actions from '../state/actions/Transport';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import styled from 'styled-components'
import { TransportMode, TransportData } from '../types/Transport'

export interface TransportContainerProps extends React.Props<TransportContainer> {
    data: TransportData,
    onPlay: () => void,
    onPause: () => void,
    onStop: () => void,
    setLocation: () => void,
}

const Div = styled.div`
    color: green;
`;

class TransportContainer extends React.Component<TransportContainerProps, {}> {
    static defaultProps: Partial<TransportContainerProps> = {
        data: {
            currentMode: TransportMode.Stop,
            currentLocation: 0,
            startLocation: 0,
            endLocation: 0,
        },
    };

    constructor(props: TransportContainerProps) {
        super(props)
    }

    render() {
        console.log()
        return (
            <Transport
                data={this.props.data}
                onStart={this.props.onPlay}
                onPause={this.props.onPause}
                onStop={this.props.onStop}
                setLocation={this.props.setLocation}
            />
        )
    }
}

export function mapStateToProps({transport}: StoreState) {
    return {
        data: transport,
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onPlay: () => {
            dispatch(actions.play());
        },
        onPause: () => {
            dispatch(actions.pause());
        },
        onStop: () => {
            dispatch(actions.stop());
        },
        setLocation: (location: any) => {
            dispatch(actions.setLocation(location));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransportContainer);
