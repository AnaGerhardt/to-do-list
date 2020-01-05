import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, updateItem } from '../../Redux/Actions'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { TaskButton, ActionButton } from '../../Styles/StyledComponents'
//import { Item } from '../Tables/ListTable'
import Categories from '../Categories'

// interface IProps {
//     item: Item
//     // updateItem: Function
//     // deleteItem: Function
// }

const DetailForm = (props) => {

    const dispatch = useDispatch()

    const initialForm = { id: undefined, completed: false, text: '', notes: '', date: '', category: undefined }

    const [editing, setEditing] = useState(false)
    const [currentItem, setCurrentItem] = useState(initialForm)
    const item = useSelector(state => currentItem)
    const [show, setShow] = useState(false)
    const handleClose = () => { setShow(false); setEditing(false) }
    const handleShow = () => { setShow(true) }

    const editRow = () => {
        setEditing(true)
        setCurrentItem({ 
            id: props.item.id, 
            completed: props.item.completed, 
            text: props.item.text,
            notes: props.item.notes,
            category: props.item.category 
        })
    }

    const handleInputChange = (e/*: React.ChangeEvent<HTMLInputElement>*/) => {
        const { name, value } = e.target
        //dispatch(handleChange(name, value))
        setCurrentItem({...currentItem, [name]: value})
    }

    return  (
    <>
        <TaskButton 
            onClick={handleShow} 
            style={{
                textDecoration: props.item.completed ? 'line-through' : 'none'
            }}
        >
            {props.item.text}
        </TaskButton>
    
        <Modal centered show={show} onHide={handleClose}>
    
            <Modal.Header closeButton>
              <Modal.Title>{editing ? 'Edit task' : 'Task details'}</Modal.Title>
            </Modal.Header>

            {editing ? (

            <Modal.Body>
                <Form
                    onSubmit={(event/*: { preventDefault: () => void; }*/) => {
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
                            type="text"
                            name="notes"
                            placeholder={props.item.notes}
                            value={item.notes}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="date"
                            name="date"
                            value={item.dateitem}
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
                            type="text"
                            value={props.item.notes}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="date"
                            //value={props.item.dateitem}
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

export default DetailForm