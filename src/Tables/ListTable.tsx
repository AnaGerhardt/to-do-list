import React from 'react'
import { Item } from '../App'
import { ActionButton, Table, Tr, Td } from '../StyledComponents'



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
            <Tr>
             <th>Tasks</th>
             <th>Date</th>
             <th>Actions</th>
            </Tr>
        </thead>
        <tbody>
            {props.list.length > 0 ? (
               props.list.map(item => (      
                <Tr key={item.id} className={item.checked ? 'completed' : ''}>
                <Td><input
                        type="checkbox"
                        style={{'marginRight': '10px'}} 
                        //name={item.id}
                        onChange={ev => {
                            item.checked = ev.currentTarget.checked
                        }}
                        onClick={() => props.checkHandler(item.id)}
                    />
                    {item.listitem}
                </Td>
                <Td>{item.dateitem}</Td>
                <Td>
                    <ActionButton 
                        onClick={() => {props.editRow(item)}}
                        style={{'marginRight': '5px'}}                      
                    >
                        Edit
                    </ActionButton>
                     <ActionButton 
                        onClick={() => props.deleteItem(item.id)}                     
                    >
                        Delete
                    </ActionButton>
                </Td>
                </Tr>
               ))
            ) : (
                <Tr>
                    <Td>No items yet.</Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            )}
        </tbody>
    </Table>
    )
}

export default ListTable