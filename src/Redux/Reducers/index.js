import { combineReducers } from 'redux'
import list from './list'
import item from './item'
import visibilityFilter from './visibilityFilter'
import categoryFilter from './categoryFilter'

export default combineReducers({
  list,
  item,
  visibilityFilter,
  categoryFilter
})