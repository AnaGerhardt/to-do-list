import React, { useState } from 'react'
import { Modal, Form, Row, Col } from 'react-bootstrap'
import { TaskButton, ActionButton } from '../../Styles/StyledComponents'
import { Item } from '../Tables/ListTable'
import Categories from '../Categories'

interface IProps {
    item: Item
    updateItem: Function
    deleteItem: Function
}

const DetailForm = (props: IProps) => {

    const [editing, setEditing] = useState(false)
    const [item, setItem] = useState(props.item)
    const [show, setShow] = useState(false)
    const handleClose = () => { setShow(false); setEditing(false) }
    const handleShow = () => { setShow(true) }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    return  (
    <>
        <TaskButton 
            onClick={handleShow} 
            className={item.checked ? 'completed' : ''}
        >
            {props.item.listitem}
        </TaskButton>
    
        <Modal centered show={show} onHide={handleClose}>
    
            <Modal.Header closeButton>
              <Modal.Title>{editing ? 'Edit task' : 'Task details'}</Modal.Title>
            </Modal.Header>

            {editing ? (

            <Modal.Body>
                <Form
                    onSubmit={(event: { preventDefault: () => void; }) => {
                        handleClose()
                        event.preventDefault()
                        if (!item.listitem) return
                        props.updateItem(props.item.id, item)
                    }}
                >

                    <Form.Group>
                        <Form.Control
                            type="text" 
                            name="listitem"
                            placeholder={props.item.listitem}
                            value={item.listitem}
                            onChange={handleInputChange} 
                        />      
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="additionalnotes"
                            placeholder={props.item.additionalnotes}
                            value={item.additionalnotes}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="date"
                            name="dateitem"
                            //value={item.dateitem}
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
                            value={props.item.listitem}                            
                            readOnly
                        />     
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={props.item.additionalnotes}
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
                                onClick={() => setEditing(true)}                 
                            >
                                Edit
                            </ActionButton>
                        </Col>
                        <Col style={{'paddingLeft': '0'}}>
                            <ActionButton 
                                onClick={() => props.deleteItem(props.item.id)}                  
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