import {connect} from 'react-redux'
import React,{Component} from 'react'
import BlockAdderApp from '../presentational_components/BlockAdderApp'
const mapStateToProps = {addActive,subActive}
const mapDispatchToProps = {onAddClick:(dispatch)=>{
		
	},
	onSubClick:(dispatch) => {
	
	}
}
connect(mapStateToProps,mapDispatchToProps)(BlockAdderApp)

