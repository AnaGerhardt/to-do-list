import React, { useState } from 'react'

const ListTable = props => {

    const [isChecked, setChecked] = useState(true);

    const toggleChange = item => { 
        item.id = setChecked (!isChecked)
        console.log (isChecked)
    }

    return (
    <table className="striped-table">
        <thead>
            <tr>
             <th>List</th>
            </tr>
        </thead>
        <tbody>
            {props.list.length > 0 ? (
               props.list.map(item => (      
                <tr key={item.id}>
                <td><input
                        type="checkbox"
                        checked={item.isChecked}
                        onChange={toggleChange}
                    />
                    {item.listitem}
                </td>
                    <td>
                        <button 
                            className="button muted-button"
                            onClick={() => props.deleteItem(item.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
               ))
            ) : (
                <tr>
                    <td>No items yet.</td>
                </tr>
            )}
        </tbody>
    </table>
    )
}

export default ListTable