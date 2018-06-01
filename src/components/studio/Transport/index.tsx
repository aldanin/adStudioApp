import * as React from 'react';
import { TransportMode, TransportData } from '../../../types/Transport'
import styled from 'styled-components'
import * as moment from 'moment'
import 'moment-duration-format';

const Timer = require('easytimer.js/')

import Transport from '../../../container/TransportContainer';

export interface TransportComponentProps extends React.Props<TransportComponent> {
    data: TransportData;
    onStart: () => void;
    onPause: () => void;
    onStop: () => void;
    setLocation: (location: number) => void;
}

export interface ButtonProps {
    backgroundColor: string,
    color: string,
}

const Button = styled.button`
    background-color: ${(props: ButtonProps) => props.backgroundColor}
`;

class TransportComponent extends React.Component<TransportComponentProps, {}> {
    private timer: any;

    constructor(props: TransportComponentProps) {
        super(props);

        this.createTimer();
    }

    createTimer() {
        this.timer = new Timer();
        this.timer.addEventListener('secondTenthsUpdated', (e) => {
            this.props.setLocation(this.timer.getTotalTimeValues().secondTenths)
        });
    }

    getFormattedLocation() {
        var mm = moment.duration(this.props.data.currentLocation * 100);

        const format = mm.hours() + ':' + mm.minutes() + ':' + mm.seconds() + ':' + mm.milliseconds();

        var diff = moment(this.props.data.currentLocation * 100).unix() - moment(0).unix();

// execution
        let f = moment.utc(diff).format('HH:mm:ss.SSS');

        const currentLocation = this.props.data.currentLocation * 100;
        const temp = moment.duration(currentLocation, 'milliseconds');
        const formatted = moment.duration(currentLocation, 'milliseconds').format('hh:mm:ss');
        // moment(this.props.data.currentLocation * 100).format('hh:mm:ss')
        return format;
    }

    componentWillReceiveProps(nextProps: TransportComponentProps) {
        const nextMode = nextProps.data.currentMode;
        const currentMode = this.props.data.currentMode;

        if (nextMode === currentMode) {
            return;
        }

        switch (nextMode) {
            case TransportMode.Stop:
                this.timer.stop();
                break;
            case TransportMode.Play:
                this.timer.start({precision: 'secondTenths'});
                break;
            case TransportMode.Pause:
                this.timer.pause();
                break;
            default:
                break;
        }
    }

    render() {
        const mode = this.props.data.currentMode;

        return (
            <div className="hello">
                <div className="greeting">
                    Location: {this.getFormattedLocation()}
                </div>
                <div>
                    <button
                        style={{
                            backgroundColor: mode === TransportMode.Play ? 'green' : 'darkgreen'
                        }}
                        onClick={this.props.onStart}
                    >
                        Play
                    </button>
                    <button
                        style={{
                            backgroundColor: mode === TransportMode.Pause ? 'silver' : 'grey'
                        }}
                        onClick={this.props.onPause}
                    >
                        Pause
                    </button>
                    <button
                        style={{
                            backgroundColor: mode === TransportMode.Stop ? 'red' : 'darkred'
                        }}
                        onClick={this.props.onStop}
                    >
                        Stop
                    </button>
                </div>
            </div>
        )
    }
}

export default TransportComponent;
