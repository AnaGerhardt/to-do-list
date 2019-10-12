import React, { useState } from 'react'

const AddForm = props => {

    const initialFormState = { id: null, listitem: '' }
    const [item, setItem] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
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
            <h2>My "To Do" List</h2>
            <label>Add a new item</label>
            <input 
                type="text" 
                name="listitem" 
                value={item.listitem}
                onChange={handleInputChange}
            >
            </input>
            <button 
                className="muted-button"
            >
                Done!
            </button>
        </form>
    )       
}

export default AddForm