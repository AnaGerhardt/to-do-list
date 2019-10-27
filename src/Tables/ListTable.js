import React from 'react'

const ListTable = props => {

    return (
    <table className={props.theme ? "striped-table" : null}>
        <thead>
            <tr>
             <th>List</th>
            </tr>
        </thead>
        <tbody>
            {props.list.length > 0 ? (
               props.list.map(item => (      
                <tr key={item.id} className={item.checked ? 'completed' : ''}>
                <td><input
                        type="checkbox"
                        name={item.id}
                        onChange={ev => {
                            item.checked = ev.currentTarget.checked
                        }}
                        onClick={() => props.checkHandler(item.id)}
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