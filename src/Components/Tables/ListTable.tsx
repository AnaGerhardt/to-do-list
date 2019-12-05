import React, { Dispatch, SetStateAction } from 'react'
import { Button, Table, Tr, Td } from '../../Styles/StyledComponents'
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
                            editRow={props.editRow} 
                            updateItem={props.updateItem} 
                            deleteItem={props.deleteItem}
                        />
                    </Td>
                    <Td>
                        {item.dateitem}
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
            style={{'marginRight':'10px'}}
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