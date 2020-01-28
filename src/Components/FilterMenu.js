import React from 'react'
import { VisibilityFilters } from '../Redux/Constants'
import FilterLink from '../Containers/FilterLink'

export const FilterMenu = () => {

  return (
    <>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </>
  )
}