//reducer-todos
import {combineReducers} from 'redux'
//state大概这样
// {
// 	visibilityFilter:xx,//当前过滤器
// 	todos:[{//任务列表
// 		id:xx,//用来判断
// 		text:xx,//任务名称
// 		completed:,//是否完成
// 	}]
// }


//1 任务 state结构 完成+切回未完
// {
// 	id:xx,//用来判断
// 	text:xx,//任务名称
// 	completed:,//是否完成
// }
const todos = (state=[],action)=>{
	switch (action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id:action.id,
					text:action.text,
					completed:false
				}
			]
		case 'TOGGLE_TODO':
			var cc=state.map(todo=>
				todo.id===action.id ?
				{...todo,completed:!todo.completed}:
				todo
			)
			return cc
		default:
			return state
	}
}

//2 过滤器 state结构
//{filter:xx}
const visibilityFilter=(state='SHOW_ALL',action)=>{
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const todoApp=combineReducers({
	todos,//默认此名称为key,此key是state中的key,此时会传递state.todos给todos函数，简单的说state key命名和函数名一致
	visibilityFilter
})

// 等价于
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
export default todoApp