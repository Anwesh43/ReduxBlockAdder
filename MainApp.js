import React,{Component} from 'react'
import blockModifierReducer from './reducers/blockModifierReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import BlockAdderContainer from './container_components/BlockAdderContainer'
const store = createStore(blockModifierReducer)
export default class MainApp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Provider store={store}>
              <BlockAdderContainer/>
          </Provider>)
    }
}
