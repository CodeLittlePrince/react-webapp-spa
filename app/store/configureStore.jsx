import { createStore } from 'redux';
import Reducers from 'reducers';

export default function () {
    return createStore(
        Reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 这句是为了chrome redux插件用的
    );
}