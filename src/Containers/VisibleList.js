import { connect } from 'react-redux'
import ListTable from '../Components/Tables/ListTable'
import { VisibilityFilters } from '../Redux/Actions'

const getVisibleTodos = (list, filter) => {
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
const mapStateToProps = state => ({
  list: getVisibleTodos(state.list, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
)(ListTable)