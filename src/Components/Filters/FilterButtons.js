import React from 'react'
import { Form } from 'react-bootstrap'

const FilterButtons = ({ active, children, onClick }) => (
  <Form.Check
    inline
    type="radio"
    label={children}
    disabled={active}
    onClick={onClick}
    name="formHorizontalRadios"
    id="formHorizontalRadios2"
    className="mb-3"
  />
)

export default FilterButtons