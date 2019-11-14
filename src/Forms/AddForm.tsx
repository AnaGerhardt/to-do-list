import React, { useState } from 'react'
import { Form, Input, Button, DatePicker } from 'antd'
import moment from 'moment'


interface IProps {
    addItem: Function
}

const AddForm = (props: IProps) => {

    const initialFormState = { id: undefined, listitem: '' }
    const [item, setItem] = useState(initialFormState)
    //const [dateField, setDateField] = useState()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    function onChange(date: moment.Moment | null, dateString: string | null) {
        console.log(date, dateString);   
      }

    return  (

        <Form
            onSubmit={event => {
                event.preventDefault()
                if (!item.listitem) return 
                    props.addItem(item)
                    setItem(initialFormState)
                    //setDateField(null)
            }}
        >
            <Form.Item>
                <Input 
                    type="text" 
                    name="listitem" 
                    value={item.listitem}
                    onChange={handleInputChange}
                    //style={{'width': '50%'}}
                    placeholder='* Add a new task'               
                />
            </Form.Item>

            <Form.Item>
                <DatePicker 
                    placeholder="Date (optional)"
                    onChange={onChange} 
                />
            </Form.Item>
       
            <Button htmlType="submit">
                Done!
            </Button>
        </Form>
    )       
}

export default AddForm