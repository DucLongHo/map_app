import { combineReducers } from 'redux'
import village from './village'
import filter from './filter'

export default combineReducers({
    village,
    filter,
})