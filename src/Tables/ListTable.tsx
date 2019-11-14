import React from 'react'
import { Item } from '../App'
import { Button } from 'antd'
import styled from 'styled-components'


const Table = styled.table`
   margin: 40px 0 40px 0; 
` 

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
    <Table>
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
                     <Button 
                        onClick={() => props.deleteItem(item.id)} 
                        style={{'marginLeft': '0.5em'}}                       
                    >
                        Delete
                    </Button>
                    <Button 
                        onClick={() => {props.editRow(item)}}                        
                    >
                        Edit
                    </Button>
                </td>
                </tr>
               ))
            ) : (
                <tr>
                    <td>No items yet.</td>
                </tr>
            )}
        </tbody>
    </Table>
    )
}

export default ListTable