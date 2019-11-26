import * as React from 'react'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from '../../Styles/StyledComponents'
import { Item } from '../../App'



interface IProps {
    currentItem: Item
    updateItem: Function
    setEditing: Dispatch<SetStateAction<boolean>>
    editing: boolean
    categories: Object
}

const EditForm = (props: IProps) => {

    const [item, setItem] = useState(props.currentItem)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    useEffect(() => {
        setItem(props.currentItem)
    }, [props])

    return  (
        <Form
            onSubmit={(event: { preventDefault: () => void; }) => {
                event.preventDefault()
                if (!item.listitem) return 
                    props.updateItem(item.id, item)
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
                    //value={item.dateitem}
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

export default EditForm