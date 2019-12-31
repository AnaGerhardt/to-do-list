import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleItem } from '../../Redux/Actions'
import { Button, Table, Tr, Td } from '../../Styles/StyledComponents'
import DetailForm from '../Forms/DetailForm'


// export interface Item {
//     id?: number
//     completed?: boolean
//     listitem?: string
//     additionalnotes?: string
//     dateitem?: Date | string
//     category?: string
//     name?: string
//     length?: number
// }

// interface IProps {
//     list: Item[]
//     setList: Dispatch<SetStateAction<Object[]>>
//     map?: Function
//     deleteItem: Function
//     //checkHandler: Function
//     updateItem: Function
//     selectAll: Function
//   }

const ListTable = () => {

    const dispatch = useDispatch()
    const list = useSelector(state => state.list)

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
                {list.length > 0 ? (
                list.map(item => (    
                    <Tr key={item.id}>
                    <Td><input
                            type="checkbox"
                            style={{'marginRight': '10px'}} 
                            onChange={ev => {
                                item.completed = ev.currentTarget.checked
                            }}
                            //onClick={() => props.checkHandler(item.id)}
                            onClick={() => dispatch(toggleItem(item))}
                        />
                        <DetailForm 
                            item={item}
                            // updateItem={props.updateItem} 
                            // deleteItem={props.deleteItem}
                        />
                    </Td>
                    <Td>
                        {item.date}
                    </Td>
                    </Tr>
                ))
                ) : (
                    <Tr>
                        <Td>No items yet.</Td>
                        <Td></Td>
                    </Tr>
                )}
            </tbody>
        </Table>

        <Button
            // onClick={() => props.selectAll()}
            style={{'marginRight':'10px'}}
        >
            Select All
        </Button>

        <Button
            // onClick={() => props.setList(props.list.filter(item => !item.completed))}
        >
            Delete All Checked
        </Button>
    </>
    )
}

export default ListTable