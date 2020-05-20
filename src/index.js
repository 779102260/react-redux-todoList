//react
import React from 'react'
import { render } from 'react-dom'
//redux
import {createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
// saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga.js'

import App from './components/App'
import reducer from './reducers/todos'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware)); // 创建store
sagaMiddleware.run(rootSaga)

store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)