import { combineReducers } from 'redux'
import list from './list'
import item from './item'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  list,
  item,
  visibilityFilter
})