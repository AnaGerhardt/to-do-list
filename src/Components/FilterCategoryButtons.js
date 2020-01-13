import React from 'react'
import { MenuButton } from '../Styles/StyledComponents'

const FilterCategoryButtons = ({ active, children, onClick }) => (
  <MenuButton
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </MenuButton>
)

export default FilterCategoryButtons