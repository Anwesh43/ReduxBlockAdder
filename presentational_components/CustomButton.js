import React,{Component} from 'react'
const CustomButton = ({onClick,active,color,text})=>{
	var buttonComp = <button onClick={onClick} style={{color}}>{text}</button>
	if(!active) {
		<button onClick={onClick} disabled style={{color}}>{text}</button>
	}
	return buttonComp
}
export default CustomButton
