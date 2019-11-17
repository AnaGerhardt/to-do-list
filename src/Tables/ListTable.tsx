import React from 'react'
import { Item } from '../App'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const Table = styled.table`
   margin: 40px 0 40px 0; 
` 

const Tr = styled.tr`
    border-bottom: 1px solid #AAAA;
` 

const Td = styled.td`
    padding: 1vh 8vw 1vh 0vw;
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
                    <Button 
                        onClick={() => {props.editRow(item)}}
                        style={{'marginRight': '5px'}}                      
                    >
                        Edit
                    </Button>
                     <Button 
                        onClick={() => props.deleteItem(item.id)}                     
                    >
                        Delete
                    </Button>
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