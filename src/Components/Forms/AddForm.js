import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, addItem } from '../../Redux/Actions'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { Button, ActionButton } from '../../Styles/StyledComponents'
import Categories from '../Categories'


export const AddForm = (props) => {

    const {theme} = props

    const dispatch = useDispatch() 
    const item = useSelector(state => state.item)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(handleChange(name, value))
    }


    return  (
    <>
        <Row style={{'textAlign':'center'}}>
            <Col>
                <ActionButton 
                    style={{'padding': '10px 120px 10px 120px', 'fontWeight':'300'}} 
                    onClick={handleShow}
                >
                    + ADD A NEW TASK
                </ActionButton>
            </Col>
        </Row>

      <Modal centered show={show} onHide={handleClose}>

        <Modal.Header 
            closeButton 
            style={{'background': '#232e4d', 'color':'white'}}
        >
            <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form
                onSubmit={(event) => {
                    event.preventDefault()
                    if (!item.text) return
                    dispatch(addItem(item))
                    dispatch({type:"INITIAL_FORM"})
                }}
            >

                <Form.Group>
                    <Form.Control
                        type="text" 
                        name="text"
                        onChange={handleInputChange}
                        placeholder="New task" 
                    />      
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="text" 
                        name="notes"
                        onChange={handleInputChange}
                        placeholder="Additional notes" 
                    />      
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                        style={{'width':'70%'}}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control 
                        as="select"
                        name="category"
                        onChange={handleInputChange}
                        style={{'width':'70%'}}
                    > 
                    {Object.entries(Categories).map(([k,v], i)=> (
                        <option key={k}>{v}</option>
                    ))}
                    </Form.Control>     
                </Form.Group>

                <ActionButton type="submit" onClick={handleClose}>
                     Done!
                </ActionButton>
            </Form>
        </Modal.Body>

      </Modal>

    </>
    )       
}