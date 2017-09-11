const initialState = {blocks:[],addActive:true,subActive:false}
import {ADD,SUB} from './constants'
const blockModifierReducer = (state=initialState,action)=>{
    const newState = Object.assign({},state)
    if(action.type == ADD) {
        if(newState.blocks.length == 0) {
            newState.subActive = true
        }
        newState.blocks.push({})
    }
    if(action.type == SUB) {
        newState.blocks.splice(newState.length-1,1)
        if(newState.blocks.length == 0) {
            newState.subActive = false
        }
    }
    return newState
}
export default blockModifierReducer
