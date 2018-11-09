import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// import LoggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';

import reducer from './reducer/ducks';

// const __DEV_DEBUG__ = 'window.devToolsExtension && window.devToolsExtension()';
// https://github.com/zalmoxisus/redux-devtools-extension
const __DEV_DEBUG__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleWares = [createLogger()];

// (<Provider store={createStoreWithMiddleware(reducer)}>
// const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

// <Provider store={store}>
const composeEnhancers = __DEV_DEBUG__ || compose;
// const store = createStore(reducer, applyMiddleware(...middleWares));
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleWares)
));

ReactDOM.render(
  // (<Provider store={createStoreWithMiddleware(reducer)}>
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();


