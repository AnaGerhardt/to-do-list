import React from 'react'
import { CategoryFilters } from '../../Redux/Constants'
import FilterCategoryLink from '../../Containers/FilterCategoryLink'

export const FilterCategoryMenu = () => {

  return (
    <>
      <FilterCategoryLink filter={CategoryFilters.SHOW_FAMILY}>Family</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_PERSONAL}>Personal</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_TRAVEL}>Travel</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_WORK}>Work</FilterCategoryLink>
      <FilterCategoryLink filter={CategoryFilters.SHOW_ALL}>All</FilterCategoryLink>
    </>
  )
}