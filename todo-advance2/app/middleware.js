// redux
import { createStore, applyMiddleware, compose } from 'redux'

// reducers (= ducks)
import reducer, { initialState } from './reducer/ducks'

// import LoggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()

const middleWares = [createLogger(), sagaMiddleware]

export default (addMiddleWares = []) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const applyMiddleWares = [...addMiddleWares, ...middleWares]
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...applyMiddleWares)
    )
  )

  sagaMiddleware.run(sagas)

  return store
}
