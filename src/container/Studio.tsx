import * as React from 'react'
import StudioComponent from '../components/studio';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import styled from 'styled-components'
import StudioData from '../types/Studio'

export interface StudioContainerProps extends React.Props<StudioContainer> {
    studioData: StudioData,
    onDecrement: () => void,
    onIncrement: () => void,
}

const Div = styled.div`
    color: green;
`;

class StudioContainer extends React.Component<StudioContainerProps, {}> {
    constructor(props: StudioContainerProps) {
        super(props)
    }

    render() {
        return (
            <>
                <Div>
                    <StudioComponent
                        studioData={this.props.studioData}
                        enthusiasmLevel={this.props.enthusiasmLevel}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                    />
                </Div>
            </>
        )
    }
}

export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onDecrement: () => {
            dispatch(actions.decrementEnthusiasm())
        },
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioContainer);
