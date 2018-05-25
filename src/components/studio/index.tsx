import * as React from 'react';
import './index.css';
import StudioData from '../../types/Studio'

import logo from '../../logo.svg';

export interface StudioComponentProps extends React.Props<StudioComponent> {
    studioData?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class StudioComponent extends React.Component<StudioComponentProps, {}> {

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    <img src={logo} className="hello-logo" alt="logo"/>
                    Hello {name + getExclamationMarks(this.props.enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

export default StudioComponent;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
