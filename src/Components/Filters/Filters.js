import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Modal, Form, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import { ActionButton, Button } from '../../Styles/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FilterMenu, FilterCategoryMenu, FilterDateInput } from '../'


const Filters = (props) => {

    const dispatch = useDispatch() 
    const [show, setShow] = useState(false);
    const { theme } = props

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return  (
    <>
        <Row>
            <Col>
                <Button onClick={handleShow}>
                    <FontAwesomeIcon icon={faFilter} size="sm" style={{'marginRight':'8px'}} />Filters 
                </Button>
            </Col>
        </Row> 

      <Modal centered show={show} onHide={handleClose}>

        <Modal.Header 
            closeButton 
            className={theme === 'light' ? 'modal-header' : 'modal-header modal-custom'}
        >
            <Modal.Title>Filter tasks</Modal.Title>
        </Modal.Header>

        <Modal.Body className={theme === 'light' ? 'modal-body' : 'modal-body modal-custom'}>
            <Container >
                <Form
                    onSubmit={(event) => {
                        event.preventDefault()
                        dispatch({type: 'SHOW_FILTERS'})
                    }}
                >
                    <Row>
                        <Col>
                            <FilterMenu />
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <FilterDateInput  />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Dropdown className="mb-3">
                                <DropdownButton 
                                    id="dropdown-basic-button"
                                    title="Categories"
                                >
                                    <FilterCategoryMenu />
                                </DropdownButton>
                            </Dropdown>
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

const connectedFilters = connect(mapState)(Filters);

export { connectedFilters as Filters }