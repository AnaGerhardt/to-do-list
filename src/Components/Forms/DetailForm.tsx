import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { TaskButton } from '../../Styles/StyledComponents'
import { Item } from '../Tables/ListTable'

interface IProps {
    currentItem?: Item
    item: Item
}

const DetailForm = (props: IProps) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return  (
        <>
    
          <TaskButton 
            onClick={handleShow} 
            className={props.item.checked ? 'completed' : ''}
          >
              {props.item.listitem}
          </TaskButton>
    
          <Modal centered show={show} onHide={handleClose}>
    
            <Modal.Header closeButton>
              <Modal.Title>Task details</Modal.Title>
            </Modal.Header>
    
            <Modal.Body>
                <Form
                    // onSubmit={(event: { preventDefault: () => void; }) => {
                    //     event.preventDefault()
                    //     if (!item.listitem) return
                    //         props.addItem(item)
                    //         setItem(initialFormState)
                    // }}
                >
    
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
                            placeholder="Observations"
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
                        {props.item.dateitem}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={props.item.category}
                            style={{'width':'60%'}}
                            readOnly
                        />
                    </Form.Group>
    
                </Form>
            </Modal.Body>
    
          </Modal>
    
        </>
    )       
}

export default DetailForm