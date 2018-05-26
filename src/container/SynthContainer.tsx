import * as React from 'react'
import Synth from '../components/synth';

export interface TransportContainerProps extends React.Props<SynthContainer> {

}

class SynthContainer extends React.Component<TransportContainerProps, {}> {

    constructor(props: TransportContainerProps) {
        super(props)
    }

    render() {
        return (
            <Synth
                name={'Roland JV80'}
            />
        )
    }
}

// export function mapStateToProps({transport}: StoreState) {
//     return {
//         data: transport,
//     };
// }
//
// export function mapDispatchToProps(dispatch: any) {
//     return {
//         onPlay: () => {
//             dispatch(actions.play())
//         },
//         onPause: () => {
//             dispatch(actions.play())
//         },
//         onStop: () => {
//             dispatch(actions.play())
//         },
//     };
// }

export default SynthContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(TransportContainer);
