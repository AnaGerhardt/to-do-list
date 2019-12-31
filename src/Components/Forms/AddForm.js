import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, addItem } from '../../Redux/Actions'
import { Modal, Form } from 'react-bootstrap'
import { Button } from '../../Styles/StyledComponents'
import Categories from '../Categories'


// interface IProps {
//     addItem: Function
// }

const AddForm = () => {

    const dispatch = useDispatch() 
    const item = useSelector(state => state.item)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (/*e: React.ChangeEvent<HTMLInputElement>*/e) => {
        const { name, value } = e.target
        dispatch(handleChange(name, value))
    }


    return  (
    <>

      <Button onClick={handleShow}>Add a new task</Button>

      <Modal centered show={show} onHide={handleClose}>

        <Modal.Header closeButton>
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

                <Button type="submit" onClick={handleClose}>
                     Done!
                </Button>
            </Form>
        </Modal.Body>

      </Modal>

    </>
    )       
}

export default AddForm