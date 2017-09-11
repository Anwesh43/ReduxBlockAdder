import {connect} from 'react-redux'
import React,{Component} from 'react'
import BlockAdderApp from '../presentational_components/BlockAdderApp'
import blockActions from '../actions'
const mapStateToProps = {addActive,subActive,blocks}
const mapDispatchToProps = {onAddClick:(dispatch)=>{
			dispatch(blockActions.blockCreatorAction())
	},
	onSubClick:(dispatch) => {
			dispatch(blockActions.blockDestroyerAction())
	}
}
const BlockAdderContainer  = connect(mapStateToProps,mapDispatchToProps)(BlockAdderApp)
export default BlockAdderContainer
