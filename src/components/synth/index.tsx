import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

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

    onClick = () => {
        alert('CL')
    }

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" onClick={this.onClick}>
                    Hello World
                </Button>
                <TextField
                    id="name"
                    label="Name"
                    margin="normal"
                />
            </div>
        );
    }
}

export default SynthComponent;