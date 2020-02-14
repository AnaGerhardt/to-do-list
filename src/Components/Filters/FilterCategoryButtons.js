import React from 'react'
import { Dropdown } from 'react-bootstrap'

const FilterCategoryButtons = ({ active, children, onClick }) => (
  <Dropdown.Item style={{'textAlign':'center','width':'200px'}} disabled={active} onSelect={onClick}>{children}</Dropdown.Item>
)

export default FilterCategoryButtons