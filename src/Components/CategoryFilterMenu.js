import React from 'react'
import { CategoryFilters } from '../Redux/Actions'
import FilterCategoryLink from '../Containers/FilterCategoryLink'

const FilterCategoryMenu = () => {

  return (
    <>
      <FilterCategoryLink filter={CategoryFilters.SHOW_ALL}>View All</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_FAMILY}>Family</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_PERSONAL}>Personal</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_TRAVEL}>Travel</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_WORK}>Work</FilterCategoryLink>
    </>
  )
}


export default FilterCategoryMenu