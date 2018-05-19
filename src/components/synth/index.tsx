import * as React from 'react';

// import logo from '../../logo.svg';

export interface SynthComponentProps extends React.Props<SynthComponent> {
    name: string,

}

class SynthComponent extends React.Component<SynthComponentProps, {}> {
    constructor (props: SynthComponentProps) {
        super(props)

        this.state = {
            ds: ''
        }
    }

    render() {
        return (
            <div>
                Synth
            </div>
        );
    }
}

export default SynthComponent;