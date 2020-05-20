import React from 'react'
import {connect} from 'react-redux'
import { addTodoAsync } from '../actions'

let Add = ({dispatch})=>{//???
	let input;

	return (
		<div>
			<form onSubmit={e=>{
				console.log(123)
				e.preventDefault();
				if(!input.value){
					return
				}
				// dispatch(addTodo( input.value.trim() ) );
				dispatch( addTodoAsync(input.value.trim()) )
				input.value='';
			}}>
				<input type="text" ref={node=>{
					input = node;
				}}/>
				<button type="submit">
					添加任务
				</button>
			</form>
		</div>
	)
}

Add = connect()(Add); //传入dispatch方法
export default Add
