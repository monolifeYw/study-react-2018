import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

// react-router
import { Switch } from 'react-router';

// redux
import { Provider } from 'react-redux';

// react-router-redux
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

// store
import initStore from './middleware';

const history = createBrowserHistory();
const addMiddleware = routerMiddleware(history);
const store = initStore([addMiddleware]);

/* const Connected = connect(state => {
  return state;
})(Switch); */

ReactDOM.render(
  // (<Provider store={createStoreWithMiddleware(reducer)}>
  (<Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Root />
      </Switch>
    </ConnectedRouter>
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
