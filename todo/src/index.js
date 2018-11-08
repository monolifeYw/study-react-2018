import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/ducks';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
