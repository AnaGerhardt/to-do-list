import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'


const Button = styled.button`
    background: white;
    color: #1890ff;
    border: 1px solid #1890ff;
    border-radius: 3px;
    padding: 5px;
`

interface IProps {
    addItem: Function
}

const AddForm = (props: IProps) => {


    const initialFormState = { id: undefined, listitem: '', dateitem: undefined }
    const [item, setItem] = useState(initialFormState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setItem({ ...item, [name]: value })
    }


    return  (

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
                    placeholder="* Add a new task" 
                />      
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="date"
                    name="dateitem"
                    value={item.dateitem}
                    onChange={handleDateChange}
                    style={{'width':'50%'}}
                />
            </Form.Group>


            <Button type="submit">
                Done!
            </Button>
        </Form>
    )       
}

export default AddForm