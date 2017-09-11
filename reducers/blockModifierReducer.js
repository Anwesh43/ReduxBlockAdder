const initialState = {blocks:[],addActive:true,subActive:false}
import {ADD,SUB} from '../constants'
const blockModifierReducer = (state=initialState,action)=>{
    const newState = Object.assign({},state)
    const newBlocks = newState.blocks.map((block)=>block)
    if(action.type == 'ADD') {
        if(newBlocks.length == 0) {
            newState.subActive = true
        }
        newBlocks.push({id:state.blocks.length+1})
        newState.blocks = newBlocks
    }
    if(action.type == 'SUB') {

        newBlocks.splice(newState.length-1,1)
        newState.blocks = newBlocks
        if(newBlocks.length == 0) {
            newState.subActive = false
        }
    }
    return newState
}
export default blockModifierReducer
