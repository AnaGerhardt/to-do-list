import { connect } from 'react-redux'
import ListTable from '../Components/Tables/ListTable'
import { VisibilityFilters, CategoryFilters } from '../Redux/Actions'


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


const mapStateToProps = state => ({
  list: getCategoryList(getVisibleList(state.list, state.visibilityFilter), state.categoryFilter)
})

export default connect(
  mapStateToProps,
)(ListTable)