import { connect } from 'react-redux'
import ListTable from '../Components/Tables/ListTable'
import { VisibilityFilters, CategoryFilters } from '../Redux/Constants'


const getVisibleList = (list, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return list
    case VisibilityFilters.SHOW_COMPLETED:
      return list.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return list.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const getDateList = (list, filter) => {
  if (filter != null)
  return list.filter(t => t.date === filter)
  else return list
}

const getCategoryList = (list, filter) => {
  switch (filter) {
    case CategoryFilters.SHOW_ALL:
      return list
    case CategoryFilters.SHOW_FAMILY:
      return list.filter(t => t.category === 'Family')
    case CategoryFilters.SHOW_PERSONAL:
      return list.filter(t => t.category === 'Personal')
    case CategoryFilters.SHOW_TRAVEL:
      return list.filter(t => t.category === 'Travel')
    case CategoryFilters.SHOW_WORK:
      return list.filter(t => t.category === 'Work')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const filterList = (filters, list, state) => {
  if (filters === true)
    return getCategoryList(getVisibleList(getDateList(state.list, state.dateFilter), state.visibilityFilter), state.categoryFilter)
  else
    return list
}

const mapStateToProps = (state) => ({
  list: filterList(state.filters, state.list, state)
})

export default connect(
  mapStateToProps,
)(ListTable)