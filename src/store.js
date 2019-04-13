import { createStore,applyMiddleware,compose } from 'redux';
import ReduxPromise from "redux-promise";
import rootReducer from './reducers';

import thunk from 'redux-thunk'
const initialStata={};

const middleware = [ReduxPromise,thunk];
const store = createStore(
    rootReducer,
    initialStata,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;