import * as React from 'react';
import './index.css';
import StudioData from '../../types/Studio'
import Transport from '../../container/TransportContainer'
import Multitracker from './Multitracker'

import logo from '../../logo.svg';
// import MixerData from '../../types/Mixer';
// import { TransportData } from '../../types/Transport';
// import AudioTrackData from '../../types/AudioTrack';

export interface StudioComponentProps extends React.Props<StudioComponent> {

}

class StudioComponent extends React.Component<StudioComponentProps, {}> {

    render() {
        return (
            <div>
                {/*<Multitracker/>*/}
                <Transport/>
            </div>
        )
    }
}

export default StudioComponent;
