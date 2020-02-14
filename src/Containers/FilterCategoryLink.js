import { connect } from 'react-redux'
import { setCategoryFilter } from '../Redux/Actions'
import FilterCategoryButtons from '../Components/Filters/FilterCategoryButtons'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setCategoryFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterCategoryButtons)