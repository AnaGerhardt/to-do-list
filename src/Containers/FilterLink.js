import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Redux/Actions'
import FilterButtons from '../Components/Filters/FilterButtons'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButtons)