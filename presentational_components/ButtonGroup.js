import React,{Component} from 'react'
import CustomButton from './CustomButton'
const ButtonGroup = ({addActivate,subActivate,onAddClick,onSubClick})=>(
	<div>
		<CustomButton color="green" text="add" activate = {addActivate} onClick={onAddClick}/>
		<CustomButton color="red" text="sub" activate = {subActivate} onClick={onSubClick}/>
	</div>
)
export default ButtonGroup
