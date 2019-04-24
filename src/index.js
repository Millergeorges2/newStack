import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import reducers from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import App from './js/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware())));

ReactDOM.render(
<Provider store = { store} >
<App/> 

</Provider>,
document.getElementById('root')
)

export default store;