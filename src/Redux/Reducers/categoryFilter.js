import { CategoryFilters } from '../Actions'

const categoryFilter = (state = CategoryFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default categoryFilter