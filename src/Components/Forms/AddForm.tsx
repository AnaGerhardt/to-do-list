import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '../../Styles/StyledComponents'



interface IProps {
    addItem: Function
    categories: Object
}


const AddForm = (props: IProps) => {


    const initialFormState = { id: undefined, listitem: '', dateitem: '', category: undefined }
    const [item, setItem] = useState(initialFormState)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
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
                {Object.entries(props.categories).map(([k,v], i)=> (
                    <option key={k}>{v}</option>
                ))}
                </Form.Control>     
            </Form.Group>

            <Button type="submit">
                Done!
            </Button>
        </Form>
    )       
}

export default AddForm