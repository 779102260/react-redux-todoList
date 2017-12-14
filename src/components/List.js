import React from 'react';

// const Li=({onClick,completed,text})=>{
// 	<li onClick={onClick} style={{textDecoration:completed?'line-through':'none'}}>
// 		{text}
// 	</li>	
// }
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

//return 自定义组件必须显示的
const List = ({ todos, onTodoClick }) => (
	<ul>
		{
			todos.map(todo =>
				{return <Todo 
					key={todo.id}
					{...todo} 
					onClick={()=>onTodoClick(todo.id)} 
				/>}
			)
		}
	</ul>
)

export default List