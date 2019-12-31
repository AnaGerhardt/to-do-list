import { connect } from 'react-redux'
import ListTable from '../Components/ListTable'
import { toggleItem, VisibilityFilters } from '../Actions'

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

const mapStateToProps = state => ({
  list: getVisibleList(state.list, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleItem: id => dispatch(toggleItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTable)