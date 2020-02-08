import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Table, Tr, Td, TaskButton, ActionButton } from '../../Styles/StyledComponents'
import { DetailForm, AddForm } from '..'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
        <Row>
             <Col> <AddForm /> </Col>
        </Row>
        <ul style={{'margin':'0 0 15px 0'}}>
        {list.length > 0 ? (
            list.map((item) => (    
                <li key={item.id} onClick={() => dispatch({type: 'TOGGLE_ITEM'})}>
                    <TaskButton 
                        className={(item.completed ? 'completedtask taskbutton' : 'taskbutton')} 
                        onClick={() => {item.completed = !item.completed}}
                    >
                        <div
                            className={(item.completed ? 'checkmark' : 'checkbox-round')} 
                            style={{'display':'inline-block'}}  
                            value={item.completed}
                        >
                            {item.completed ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </div>
                        {item.text}
                    </TaskButton>
                </li>
            ))
            ) : (
                <h5 style={{'margin': '20px 0 20px 0'}}>No tasks to show.</h5>
        )}
        </ul>

    
        {/* <Table>
            <thead>
                <Tr>
                <th>Tasks</th>
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
                    </Tr>
                ))
                ) : (
                    <Tr>
                        <Td>No items yet.</Td>
                    </Tr>
                )}
            </tbody>
        </Table> */}

        <Row noGutters style={{'textAlign':'right', 'margin': '30px 0 40px 0'}}>
            <Col style={{'float':'right'}}> 
                <ActionButton
                    onClick={() => dispatch({type: 'SELECT_ALL'})}
                >
                    Select All
            </ActionButton>
            </Col>
            <Col>
                <ActionButton
                    onClick={() => dispatch({type: 'DELETE_ALL'})}
                >
                    Delete All Checked
                </ActionButton>
            </Col>
        </Row>
    </>
    )
}

export default ListTable