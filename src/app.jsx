import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './container/container.jsx';
import store from './store.js';

// このファイルは基本的に変更する必要はない。
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('#root')
);
