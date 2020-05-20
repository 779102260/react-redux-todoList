//action 类型
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let id=0
//过滤器
export const VisiilityFilters={
	SHOW_ALL:'SHOW_ALL',
	SHOW_COMPLETE:'SHOW_COMPLETE',
	SHOW_ACTIVE:'SHOW_ACTIVE'
}

//action 创建函数
export function addTodo(text) {
	return {
		id:id++,
		type:'ADD_TODO',
		text
	}
}
export function addTodoAsync(text) {
	return {
		...addTodo(text),
		type:'ADD_TODO_ASYNC'
	}
}
export 
function toggleTodo(listId) {
	return {type:'TOGGLE_TODO',id:listId}
}
export 
function setVisibilityFilter(filter) {
	return {type:'SET_VISIBILITY_FILTER',filter}
}

