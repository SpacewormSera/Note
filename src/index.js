import React from 'react'
import {render} from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './index.css'
import thunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {rootReducer} from './Redux/rootReducer'

const LOCAL_STORAGE_KEY = 'react-list-notes';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// store.subscribe(localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState())));

const app = (
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
)

render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
