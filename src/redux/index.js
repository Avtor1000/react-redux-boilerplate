import {createStore} from 'redux'
import {applyMiddleware, compose} from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware( routerMiddleware(history), thunk, logger))

const store = createStore(reducer(history), enhancer)

window.store = store // для дебагинга через консоль

export default store