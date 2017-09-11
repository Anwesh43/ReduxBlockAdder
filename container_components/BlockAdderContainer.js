import {connect} from 'react-redux'
import React,{Component} from 'react'
import BlockAdderApp from '../presentational_components/BlockAdderApp'
import blockActions from '../actions'
const mapStateToProps = (state)=>{
		const addActive = state.addActive
		const subActive = state.subActive
		const blocks = state.blocks
		return {addActive,subActive,blocks}
}
const mapDispatchToProps =(dispatch)=>{
 return {
	 	onAddClick:()=>{
				console.log(blockActions.blockCreatorAction())
				dispatch(blockActions.blockCreatorAction())
	 	},
	 	onSubClick:()=>{
				dispatch(blockActions.blockDestroyerAction())
		}
	}
}
const BlockAdderContainer  = connect(mapStateToProps,mapDispatchToProps)(BlockAdderApp)
export default BlockAdderContainer
