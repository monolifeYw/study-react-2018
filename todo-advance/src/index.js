import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';

// store
import initStore from './middleware';

const store = initStore();

ReactDOM.render(
  // (<Provider store={createStoreWithMiddleware(reducer)}>
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
