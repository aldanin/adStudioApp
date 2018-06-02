import * as React from 'react';
import * as Redux from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Studio from './components/studio'
import Synth from './container/SynthContainer'
import styled from 'styled-components'
import AudioContextContainer from './container/AudioContextContainer'
// import Themed from './Themed'
//
// import routes from '../routes'

interface RootProps {
    // store?: Redux.Store<any>;
    // history?: any;
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Root: React.SFC<RootProps> = ({}) => (
    <AudioContextContainer>
        <Router>
            <Container>
                <Header/>
                <Switch>
                    <Route exact={true} path={'/'} component={Studio}/>
                    <Route path={'/studio'} component={Studio}/>
                    <Route path={'/synth'} component={Synth}/>
                </Switch>
            </Container>
        </Router>
    </AudioContextContainer>
)

export default Root
// import * as React from 'react';
// // import * as ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import Hello from './components/hello/Hello'
//
// export default (
//     <Router>
//         <Hello />
//     </Router>
// )
