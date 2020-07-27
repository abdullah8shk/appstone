import { combineReducers } from 'redux'
import { appReducer } from './state'

const rootReducer = combineReducers({
    app : appReducer
})

export default rootReducer