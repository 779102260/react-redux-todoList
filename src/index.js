//react
import React from 'react'

// 1. 不需要 render 渲染根节点，使用 app.start('#root')
// import { render } from 'react-dom'
// 2. 不需要 redux 
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// dva
import dva from 'dva'
import { Router, Route } from 'dva/router';

import App from './components/App'
// import reducer from './reducers/todos'
// const store = createStore(reducer);//创建store

// 1 实例
const app = dva()
// 2 增加一个模块的数据，action自动匹配，相当于'list/add'，但是action创建函数还是需要的
app.model({
  namespace: 'list',
  state: [], // 相当于 initState
  reducers: { // 无区别
    add(state, action) {
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          completed:false
        }
      ]
    },
    toggle(state, action) {
      return state.map(todo =>
				todo.id===action.id ?
				{...todo,completed:!todo.completed}:
				todo
			)
    }
  }
})
app.model({
  namespace: 'filter',
  state: 'SHOW_ALL',
  reducers: {
    set(state, action) {
      return action.filter
    }
  }
})

// 3 必须使用dva的路由
app.router(({ history }) => 
  <Router history={history}>
    <Route path="/" component={App} />
    {/* ... */}
  </Router>
);
app.start('#root')

// render(
//   <Provider store={store}>
//   	<App />
//   </Provider>,
//   document.getElementById('root')
// )