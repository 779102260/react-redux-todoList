import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import List from './List'

const getVisibleTodos=(todos,filter)=>{
	switch(filter){
		case 'SHOW_ALL':{
			return todos;
		}
		case 'SHOW_COMPLETED':{
			return todos.filter(t=>t.completed)
		}
		case 'SHOW_ACTIVE':{
			return todos.filter(t=>!t.completed)
		}
		default:
			throw new Error('Unknown filter:'+filter)
	}
}

const mapStateToProps=(state)=>{
	return {todos:getVisibleTodos(state.todos,state.visibilityFilter)}
}	

// const mapDispatchToProps={
// 	onTodoClick:toggleTodo
// }
const mapDispatchToProps=(dispatch)=>({
	onTodoClick:(id)=>{
		dispatch(toggleTodo(id))
	}
})

const Lists=connect(
	mapStateToProps,
	mapDispatchToProps
)(List)


export default Lists