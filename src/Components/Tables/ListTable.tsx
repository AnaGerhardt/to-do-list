import React, { Dispatch, SetStateAction } from 'react'
import { Button, ActionButton, Table, Tr, Td } from '../../Styles/StyledComponents'
import EditForm from '../Forms/EditForm'
import DetailForm from '../Forms/DetailForm'


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
                </Tr>
            </thead>
            <tbody>
                {props.list.length > 0 ? (
                props.list.map(item => (      
                    <Tr key={item.id}>
                    <Td><input
                            type="checkbox"
                            style={{'marginRight': '10px'}} 
                            onChange={ev => {
                                item.checked = ev.currentTarget.checked
                            }}
                            onClick={() => props.checkHandler(item.id)}
                        />
                        <DetailForm 
                            item={item}
                            currentItem={props.currentItem} 
                        />
                    </Td>
                    <Td>
                        {item.dateitem}
                        {/* <EditForm 
                            item={item} 
                            editRow={props.editRow} 
                            updateItem={props.updateItem} 
                            currentItem={props.currentItem}
                        />
                        <ActionButton 
                            onClick={() => props.deleteItem(item.id)} 
                            style={{'fontSize': '0.8em'}}                    
                        >
                            Delete
                        </ActionButton> */}
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