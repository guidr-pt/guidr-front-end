import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';




const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Router>
                  <Provider store={store}>
                    <App />
                  </Provider>
                </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
