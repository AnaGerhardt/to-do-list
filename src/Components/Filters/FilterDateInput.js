import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { setDateFilter } from '../../Redux/Actions'

export const FilterDateInput = () => {
    const dispatch = useDispatch()

    return (
        <Form.Group style={{'width':'200px'}}>
            <Form.Control
                type="date"
                onChange={(e) => {dispatch(setDateFilter(e.target.value))}}
            />
        </Form.Group> 
    )  
}