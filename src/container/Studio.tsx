import * as React from 'react'
import Studio from '../components/studio';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export interface StudioContainerProps extends React.Props<StudioContainer> {
    enthusiasmLevel: number,
    name: string,
    onDecrement: () => void,
    onIncrement: () => void,
}

class StudioContainer extends React.Component<StudioContainerProps, {}> {
    constructor(props: StudioContainerProps) {
        super(props)
    }

    render() {
        return (
            <Studio
                name={this.props.name}
                enthusiasmLevel={this.props.enthusiasmLevel}
                onDecrement={this.props.onDecrement}
                onIncrement={this.props.onIncrement}
            />
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
