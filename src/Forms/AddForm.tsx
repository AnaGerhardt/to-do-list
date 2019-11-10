import React, { useState } from 'react'
import { DatePicker } from 'antd'
import styled from 'styled-components'

const Button = styled.button`
  text-align: center;
  color: grey;
`;

interface IProps {
    addItem: Function
}

const AddForm = (props: IProps) => {

    const initialFormState = { id: undefined, listitem: '' }
    const [item, setItem] = useState(initialFormState)
    const [startDate, setStartDate] = useState()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value })
    }

    return  (

        <form
            onSubmit={event => {
                event.preventDefault()
                if (!item.listitem) return 
                    props.addItem(item)
                    setItem(initialFormState)
            }}
        >
            <label>Add a new item</label>
            <input 
                type="text" 
                name="listitem" 
                value={item.listitem}
                onChange={handleInputChange}
                style={{'width': '50%'}}
            >
            </input>
            <br />
            <DatePicker 
                showTime 
                placeholder="Select date (optional)"
                onChange={value => setStartDate(value)} 
                onOk={value => setStartDate(value)} 
            />
            <br />
            <Button 
            >
                Done!
            </Button>
        </form>
    )       
}

export default AddForm