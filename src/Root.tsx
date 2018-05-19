import * as React from 'react';
// import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Redux from 'redux'
import Header from './components/header'
import Studio from './container/Studio'
import Synth from './container/Synth'
// import Themed from './Themed'
//
// import routes from '../routes'

interface RootProps {
    store?: Redux.Store<any>;
    history?: any;
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
