import React, { useState } from 'react'
import { DateInput } from "@blueprintjs/datetime";

interface IProps {
    addItem: Function
}

const AddForm = (props: IProps) => {

    const initialFormState = { id: undefined, listitem: '' }
    const [item, setItem] = useState(initialFormState)

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
            <DateInput 
                formatDate={date => date.toLocaleString()}
                parseDate={str => new Date(str)}
                placeholder={"Select a date (optional)"}     
            />
            <br />
            <button 
                className="muted-button"
            >
                Done!
            </button>
        </form>
    )       
}

export default AddForm