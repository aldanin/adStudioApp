import * as React from 'react';
import * as Redux from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Studio from './components/studio'
import Synth from './container/SynthContainer'
// import Themed from './Themed'
//
// import routes from '../routes'

interface RootProps {
    // store?: Redux.Store<any>;
    // history?: any;
}

const Root: React.SFC<RootProps> = ({}) => (
    <div>
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact={true} path={'/'} component={Studio}/>
                    <Route path={'/studio'} component={Studio}/>
                    <Route path={'/synth'} component={Synth}/>
                </Switch>
            </div>
        </Router>
    </div>
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
