import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Table, Tr, Td } from '../../Styles/StyledComponents'
import { DetailForm, AddForm } from '..'
import { Row, Col } from 'react-bootstrap'

// export interface Item {
//     id?: number
//     completed?: boolean
//     text?: string
//     notes?: string
//     date?: Date | string
//     category?: string
//     name?: string
//     length?: number
// }

const ListTable = ({list}) => {

    const dispatch = useDispatch()
    //const list = useSelector((state: any) => state.list)

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
                list.map((item) => (    
                    <Tr key={item.id}>
                    <Td><input
                            type="checkbox"
                            style={{'marginRight': '10px'}} 
                            onChange={ev => {
                                item.completed = ev.currentTarget.checked
                            }}
                            onClick={() => dispatch({type: 'TOGGLE_ITEM'})}
                        />
                        <DetailForm 
                            item={item}
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

        <Row>
            <Col> <AddForm /> </Col>
            <Col className="text-right" sm="3">
                <Button
                    onClick={() => dispatch({type: 'SELECT_ALL'})}
                >
                    Select All
            </Button>
            </Col>
            <Col>
                <Button
                    onClick={() => dispatch({type: 'DELETE_ALL'})}
                >
                    Delete All Checked
                </Button>
            </Col>
        </Row>
    </>
    )
}

export default ListTable