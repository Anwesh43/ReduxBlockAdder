import React,{Component} from 'react'
import DivBlock from './DivBlock'
import ButtonGroup from './ButtonGroup'
const BlockAdderApp = ({blocks,addActive,subActive,onAddClick,onSubClick})=>{
	console.log(`In blocks app ${blocks}`)
	console.log(`subActive is ${subActive}`)
	const divBlocks = blocks.map((block,index)=><DivBlock key={`block_${index}`}/>)
	return (<div>
			{divBlocks}
			<ButtonGroup addActive={addActive} subActive={subActive} onAddClick={onAddClick} onSubClick={onSubClick}/>
		</div>)
}
export default BlockAdderApp
