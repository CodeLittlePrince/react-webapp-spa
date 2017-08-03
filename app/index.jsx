import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/routerMap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById('app')
);