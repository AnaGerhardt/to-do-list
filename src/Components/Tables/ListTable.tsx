import React, { Dispatch, SetStateAction } from 'react'
import { Button, ActionButton, Table, Tr, Td } from '../../Styles/StyledComponents'
import EditForm from '../Forms/EditForm'


export interface Item {
    id?: number
    checked?: boolean
    dateitem?: Date | string
    listitem?: string
    category?: string
    name?: string
    length?: number
  }

interface IProps {
    list: Item[]
    setList: Dispatch<SetStateAction<Object[]>>
    map?: Function
    deleteItem: Function
    checkHandler: Function
    editRow: Function
    updateItem: Function
    selectAll: Function
    currentItem: Item
  }

const ListTable = (props: Item & IProps) => {

    return (
    <>
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
                        <EditForm 
                            item={item} 
                            editRow={props.editRow} 
                            updateItem={props.updateItem} 
                            currentItem={props.currentItem}
                        />
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

        <Button
            onClick={() => props.selectAll()}
            style={{'marginRight':'5px'}}
        >
            Select All
        </Button>

        <Button
            onClick={() => props.setList(props.list.filter(item => !item.checked))}
        >
            Delete All Checked
        </Button>
    </>
    )
}

export default ListTable