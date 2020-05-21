import React from 'react'
import {connect} from 'dva'
import {addTodo} from '../actions'

let Add = ({dispatch})=>{//???
	let input;

	return (
		<div>
			<form onSubmit={e=>{
				e.preventDefault();
				if(!input.value){
					return
				}
				dispatch({ ...addTodo( input.value.trim() ), type: 'list/add' });
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
