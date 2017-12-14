import React,{Component} from 'react'
//按钮组件
export default class AddTodo extends Component{
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(e){
		const node=	this.ele;
		const text=node.value.trim();
		this.props.onAddClick(text);
		node.value='';
	}
	render(){
		return (
			<div>
				<input type="text" ref={(ele)=>{this.ele=ele;}}/>
				<button onClick={this.handleClick}></button>
			</div>			
		)
	}
}