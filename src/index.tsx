import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './container/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { enthusiasm } from './state/reducers/Transport';
import Root from './Root'
import configureStore from './state/configureStore'

const store = configureStore({})

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
