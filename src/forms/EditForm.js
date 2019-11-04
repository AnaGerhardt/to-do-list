import * as React from 'react'
import { useState, useEffect } from 'react'

const EditForm = props => {

    const [item, setItem] = useState(props.currentItem)

    const handleInputChange = event => {
        const { name, value } = event.target
        setItem({ ...item, [name]: value })
    }

    useEffect(() => {
        setItem(props.currentItem)
    }, [props])

    return  (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!item.listitem) return 
                    props.updateItem(item.id, item)
            }}
        >
            <label>Edit item</label>
            <input 
                type="text" 
                name="listitem" 
                value={item.listitem}
                onChange={handleInputChange}
                placeholder={props.currentItem.name}
            >
            </input>
            <button 
                className="muted-button"
                style={{'marginRight': '0.5em'}}
            >
                Done!
            </button>
            <button 
                className="muted-button"
                onClick={() => props.setEditing(false)} 
            >
                Cancel
            </button>
        </form>
    )       
}

export default EditForm