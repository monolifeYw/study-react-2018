import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

// redux
import { Provider } from 'react-redux';

// store
import initStore from './middleware';

const store = initStore();

ReactDOM.render(
  // (<Provider store={createStoreWithMiddleware(reducer)}>
  (<Provider store={store}>
    <Root />
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
