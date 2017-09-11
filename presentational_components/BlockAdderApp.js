import React,{Component} from 'react'
import DivBlock from './DivBlock'
import ButtonGroup from './ButtonGroup'
const BlockAdderApp = ({blocks,addActive,subActive,onAddClick,onSubClick})=>{
	const divBlocks = blocks.map((block)=><DivBlock/>
	return (<div>
			{divBlocks}
			<ButtonGroup addActive={addActive} subActive={subActive} onAddClick={onAddClick} onSubClick={onSubClick}/>
		</div>)
}
export default BlockAdderApp
