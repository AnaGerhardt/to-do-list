import * as React from 'react'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Item } from '../App'


interface IProps {
    currentItem: Item
    updateItem: Function
    setEditing: Dispatch<SetStateAction<boolean>>
    editing: boolean
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