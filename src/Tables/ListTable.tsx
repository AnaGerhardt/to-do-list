import React from 'react'
import { Item } from '../App'


interface IProps {
    list: Item[]
    theme?: boolean
    checkHandler: Function
    editRow: Function
    deleteItem: Function
    map?: Function
  }

const ListTable = (props: Item & IProps) => {


    return (
    <table className={props.theme ? "striped-table" : undefined}>
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
                        //name={item.id}
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
                        style={{'marginLeft': '0.5em'}}                       
                    >
                        Delete
                    </button>
                    <button 
                        className="button muted-button"
                        onClick={() => {props.editRow(item)}}                        
                    >
                        Edit
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