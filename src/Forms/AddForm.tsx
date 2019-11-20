import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '../StyledComponents'



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
                    placeholder="New task" 
                />      
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="date"
                    name="dateitem"
                    value={item.dateitem}
                    onChange={handleDateChange}
                    style={{'width':'70%'}}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    as="select"
                    name="category"
                    //value={item.category}
                    //onChange={handleCategoryChange}
                    style={{'width':'70%'}}
                > 
                    <option>Family</option>
                    <option>Personal</option>
                    <option>Travel</option>  
                    <option>Work</option>                   
                </Form.Control>     
            </Form.Group>


            <Button type="submit">
                Done!
            </Button>
        </Form>
    )       
}

export default AddForm