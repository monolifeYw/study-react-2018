// redux
import { createStore, applyMiddleware, compose } from 'redux';

// reducers (= ducks)
import reducer from './reducer/ducks';

// import LoggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const middleWares = [createLogger(), sagaMiddleware];

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleWares)
    )
  );

  sagaMiddleware.run(sagas);

  return store;
}
