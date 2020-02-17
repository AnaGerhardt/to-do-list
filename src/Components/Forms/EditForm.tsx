import React, { useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { deleteItem, updateItem } from '../../Redux/Actions'
import { Modal, Form, Container, Row, Col } from 'react-bootstrap'
import { ActionButton } from '../../Styles/StyledComponents'
import { Item } from '../Tables/ListTable'
import Categories from '../Filters/Categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    item: Item
    theme: string
}

const EditForm = (props: IProps) => {

    const { theme } = props
    const dispatch = useDispatch()

    const initialForm = { id: undefined, completed: false, text: '', date: '', category: '' }

    const [editing, setEditing] = useState(false)
    const [currentItem, setCurrentItem] = useState<Item>(initialForm)
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        //dispatch(handleChange(name, value))
        setCurrentItem({...currentItem, [name]: value})
    }

    return  (
    <>
        <FontAwesomeIcon icon={faEdit} onClick={handleShow} style={{"float":"right","marginTop":"3px"}} />
    
        <Modal centered show={show} onHide={handleClose}>
    
            <Modal.Header closeButton className={theme === 'light' ? 'modal-header' : 'modal-header modal-custom'}>
              <Modal.Title>{editing ? 'Edit task' : 'Task details'}</Modal.Title>
            </Modal.Header>

            {editing ? (

            <Modal.Body className={theme === 'light' ? 'modal-body' : 'modal-body modal-custom'}>
                <Container>
                    <Form
                        onSubmit={(event: React.FormEvent) => {
                            handleClose()
                            event.preventDefault()
                            setEditing(false)
                            if (!item.text) return
                            dispatch(updateItem(currentItem.id, currentItem))
                        }}
                    >

                        <Row>
                            <Col md={8} lg={8}>
                                <Form.Group>
                                    <Form.Control
                                        type="text" 
                                        name="text"
                                        placeholder={props.item.text}
                                        value={item.text}
                                        onChange={handleInputChange} 
                                    />      
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} lg={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={item.date}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} lg={6}>
                                <Form.Group>
                                    <Form.Control 
                                        as="select"
                                        name="category"
                                        value={item.category}
                                        onChange={handleInputChange}
                                    > 
                                    {Object.entries(Categories).map(([k,v], i)=> (
                                        <option key={k}>{v}</option>
                                    ))}
                                    </Form.Control>     
                                </Form.Group>
                            </Col>
                        </Row>

                        <ActionButton type="submit">
                            Done!
                        </ActionButton>

                    </Form>
                </Container>
            </Modal.Body>

            ) : (

            <Modal.Body className={theme === 'light' ? 'modal-body' : 'modal-body modal-custom'}>
                <Container>
                    <Form>
                        <Row>
                            <Col md={8} lg={8}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        value={props.item.text}                            
                                        readOnly
                                    />     
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} lg={6}>
                                <Form.Group>
                                    <Form.Control
                                        type="date"
                                        value={props.item.date}
                                        readOnly
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} lg={6}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                value={props.item.category}
                                readOnly
                            />
                        </Form.Group>
                            </Col>
                        </Row>

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
                </Container>
            </Modal.Body>

            )}
    
        </Modal>
    </>
    )       
}

function mapState(state: any) {
    const { theme } = state
    return { theme }
}

const connectedEditForm = connect(mapState)(EditForm);

export { connectedEditForm as EditForm }