import { connect } from 'dva'
import { setVisibilityFilter } from '../actions'

import Link from './Link'

const mapStateToProps=(state,ownProps)=>({
	active:ownProps.filter===state.visibilityFilter
})

const mapDispatchToProps=(dispatch,ownProps)=>({
	onClick:()=>{
		dispatch({...setVisibilityFilter(ownProps.filter), type: 'filter/set'})
	}
})

const LinkContainer = connect(mapStateToProps,mapDispatchToProps)(Link)

export default LinkContainer 