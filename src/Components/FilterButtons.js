import React from 'react'
import { MenuButton } from '../Styles/StyledComponents'

const FilterButtons = ({ active, children, onClick }) => (
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

export default FilterButtons