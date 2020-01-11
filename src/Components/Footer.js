import React from 'react'
import { VisibilityFilters } from '../Redux/Actions'
import FilterLink from '../Containers/FilterLink'

const Footer = () => {

  return (
    <>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </>
  )
}


export default Footer