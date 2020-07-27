import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './Redux/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux'

let store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

