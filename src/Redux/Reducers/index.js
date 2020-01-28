import { combineReducers } from 'redux'
import list from './list'
import item from './item'
import visibilityFilter from './visibilityFilter'
import categoryFilter from './categoryFilter'
import users from './users'
import alert from './alert'
import authentication from './authentication'
import registration from './registration'

export default combineReducers({
  list,
  item,
  visibilityFilter,
  categoryFilter,
  users,
  alert,
  authentication,
  registration
})