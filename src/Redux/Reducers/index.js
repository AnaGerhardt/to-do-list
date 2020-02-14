import { combineReducers } from 'redux'
import theme from './theme'
import list from './list'
import item from './item'
import filters from './filters'
import visibilityFilter from './visibilityFilter'
import dateFilter from './dateFilter'
import categoryFilter from './categoryFilter'
import users from './users'
import alert from './alert'
import authentication from './authentication'
import registration from './registration'

export default combineReducers({
  theme,
  filters,
  list,
  item,
  visibilityFilter,
  dateFilter,
  categoryFilter,
  users,
  alert,
  authentication,
  registration
})