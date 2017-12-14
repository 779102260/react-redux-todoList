//react
import React from 'react'
import { render } from 'react-dom'
//redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'
import reducer from './reducers/todos'

const store=createStore(reducer);//创建store
render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)