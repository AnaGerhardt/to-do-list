import React, { useState } from 'react'

const AddForm = props => {

    const initialFormState = { id: '', text: '' }
    const [item, setItem] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setItem({ ...item, [name]: value })
    }

    return  (
        <form>
            <h2>My "To Do" List</h2>
            <label>Add a new item</label>
            <input 
                type="text" 
                name="item" 
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