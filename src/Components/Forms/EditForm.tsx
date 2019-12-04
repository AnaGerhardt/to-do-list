import * as React from 'react'
import { useState, useEffect } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { ActionButton, Button } from '../../Styles/StyledComponents'
import { Item } from '../Tables/ListTable'
import Categories from '../Categories'



interface IProps {
    currentItem?: Item
    editRow: Function
    updateItem: Function
    item: Item
}

const EditForm = (props: IProps) => {

    const [item, setItem] = useState(props.currentItem)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { 
        setShow(true); 
        props.editRow(item)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    useEffect(() => {
        setItem(props.currentItem)
    }, [props])

    return  (
        <>

            <ActionButton onClick={handleShow} style={{'marginRight':'5px', 'fontSize':'0.8em'}}>Edit</ActionButton>

            <Modal centered show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form
                        onSubmit={(event: { preventDefault: () => void; }) => {
                            event.preventDefault()
                            if (!props.item.listitem) return
                            props.updateItem(props.item.id, item)
                        }}
                    >

                        <Form.Group>
                            <Form.Control
                                type="text" 
                                name="listitem"
                                value={props.item.listitem}
                                onChange={handleInputChange}
                                placeholder="New task" 
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
                                value={props.item.category}
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

export default EditForm