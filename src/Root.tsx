import * as React from 'react';
// import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'
import * as Redux from 'redux'
import Hello from './container/Hello'
// import Themed from './Themed'
//
// import routes from '../routes'

interface RootProps {
    store?: Redux.Store<any>;
    history?: any;
}
const Root: React.SFC<RootProps> = ({  }) => (
    <Router>
        <Header/>
        <Hello />
    </Router>
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
