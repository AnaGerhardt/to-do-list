import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { Button } from '../../Styles/StyledComponents'
import Categories from '../Categories'



interface IProps {
    addItem: Function
}


const AddForm = (props: IProps) => {


    const initialFormState = { id: undefined, listitem: '', additionalnotes: '', dateitem: '', category: undefined }
    const [item, setItem] = useState(initialFormState)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
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
                onSubmit={(event: { preventDefault: () => void; }) => {
                    event.preventDefault()
                    if (!item.listitem) return
                        props.addItem(item)
                        setItem(initialFormState)
                }}
            >

                <Form.Group>
                    <Form.Control
                        type="text" 
                        name="listitem"
                        value={item.listitem}
                        onChange={handleInputChange}
                        placeholder="New task" 
                    />      
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="text" 
                        name="additionalnotes"
                        value={item.additionalnotes}
                        onChange={handleInputChange}
                        placeholder="Additional notes" 
                    />      
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="date"
                        name="dateitem"
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