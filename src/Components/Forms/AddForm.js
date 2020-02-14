import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { handleChange, addItem } from '../../Redux/Actions'
import { Modal, Form, Container, Row, Col } from 'react-bootstrap'
import { ActionButton } from '../../Styles/StyledComponents'
import Categories from '../Filters/Categories'


const AddForm = (props) => {

    const dispatch = useDispatch() 
    const item = useSelector(state => state.item)
    const [show, setShow] = useState(false);
    const { theme } = props

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
                    style={{'paddingTop':'10px', 'paddingBottom':'10px','fontWeight':'300', 'width':'100%'}} 
                    onClick={handleShow}
                >
                    + ADD A NEW TASK
                </ActionButton>
            </Col>
        </Row>

      <Modal centered show={show} onHide={handleClose}>

        <Modal.Header 
            closeButton 
            className={theme === 'light' ? 'modal-header' : 'modal-header modal-custom'}
        >
            <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>

        <Modal.Body className={theme === 'light' ? 'modal-body' : 'modal-body modal-custom'}>
            <Container >
                <Form
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (!item.text) return
                        dispatch(addItem(item))
                        dispatch({type:"INITIAL_FORM"})
                    }}
                >
                    <Row>
                        <Col lg={8}>
                            <Form.Group>
                                <Form.Control
                                    type="text" 
                                    name="text"
                                    onChange={handleInputChange}
                                    placeholder="New task" 
                                />      
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <Form.Group>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    onChange={handleInputChange}
                                />
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <Form.Group>
                                <Form.Control 
                                    as="select"
                                    name="category"
                                    onChange={handleInputChange}
                                > 
                                {Object.entries(Categories).map(([k,v], i)=> (
                                    <option key={k}>{v}</option>
                                ))}
                                </Form.Control>     
                            </Form.Group>
                        </Col>
                    </Row>

                    <ActionButton type="submit" onClick={handleClose}>
                        Done!
                    </ActionButton>
                </Form>
            </Container>
        </Modal.Body>

      </Modal>

    </>
    )       
}

function mapState(state) {
    const { theme } = state
    return { theme }
}

const connectedAddForm = connect(mapState)(AddForm);

export { connectedAddForm as AddForm }