import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// applyMiddleware
// import reducers from './reducers';
import reducers from './ducks';


// const createStoreWithMiddleware = applyMiddleware()(createStore);

// store
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  (
    // <Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);



// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
