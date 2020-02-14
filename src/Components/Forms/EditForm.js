import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, updateItem } from '../../Redux/Actions'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { ActionButton } from '../../Styles/StyledComponents'
//import { Item } from '../Tables/ListTable'
import Categories from '../Filters/Categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

// interface IProps {
//     item: Item
// }

export const EditForm = (props) => {

    const dispatch = useDispatch()

    const initialForm = { id: '', completed: false, text: '', date: '', category: '' }

    const [editing, setEditing] = useState(false)
    const [currentItem, setCurrentItem] = useState(initialForm)
    const [show, setShow] = useState(false)
    const handleClose = () => { setShow(false); setEditing(false) }
    const handleShow = () => { setShow(true) }

    const item = useSelector(state => currentItem)

    const editRow = () => {
        setEditing(true)
        setCurrentItem({ 
            id: props.item.id, 
            completed: false,
            text: props.item.text,
            date: props.item.date,
            category: props.item.category 
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        //dispatch(handleChange(name, value))
        setCurrentItem({...currentItem, [name]: value})
    }

    return  (
    <>
        <FontAwesomeIcon icon={faEdit} onClick={handleShow} style={{"float":"right","marginTop":"3px"}} />
    
        <Modal centered show={show} onHide={handleClose}>
    
            <Modal.Header closeButton>
              <Modal.Title>{editing ? 'Edit task' : 'Task details'}</Modal.Title>
            </Modal.Header>

            {editing ? (

            <Modal.Body>
                <Form
                    onSubmit={(event) => {
                        handleClose()
                        event.preventDefault()
                        setEditing(false)
                        if (!item.text) return
                        dispatch(updateItem(currentItem.id, currentItem))
                    }}
                >

                    <Form.Group>
                        <Form.Control
                            type="text" 
                            name="text"
                            placeholder={props.item.text}
                            value={item.text}
                            onChange={handleInputChange} 
                        />      
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="date"
                            name="date"
                            value={item.date}
                            onChange={handleInputChange}
                            style={{'width':'70%'}}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control 
                            as="select"
                            name="category"
                            value={item.category}
                            onChange={handleInputChange}
                            style={{'width':'70%'}}
                        > 
                        {Object.entries(Categories).map(([k,v], i)=> (
                            <option key={k}>{v}</option>
                        ))}
                        </Form.Control>     
                    </Form.Group>

                    <ActionButton type="submit">
                        Done!
                    </ActionButton>

                </Form>
            </Modal.Body>

            ) : (

            <Modal.Body>
                <Form>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={props.item.text}                            
                            readOnly
                        />     
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="date"
                            value={props.item.date}
                            style={{'width':'60%'}}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={props.item.category}
                            style={{'width':'60%'}}
                            readOnly
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <ActionButton 
                                onClick={() => editRow()}                 
                            >
                                Edit
                            </ActionButton>
                        </Col>
                        <Col style={{'paddingLeft': '0'}}>
                            <ActionButton 
                                onClick={() => dispatch(deleteItem(props.item.id))}                  
                            >
                                Delete
                            </ActionButton>
                        </Col>
                        <Col></Col><Col></Col>
                    </Row>

                </Form>
            </Modal.Body>

            )}
    
        </Modal>
    </>
    )       
}