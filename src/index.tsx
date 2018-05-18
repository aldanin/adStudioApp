import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './container/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import Root from './Root'

const store = createStore(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
