import React from 'react'
import { useDispatch } from 'react-redux'
import { TaskButton, ActionButton, Button } from '../../Styles/StyledComponents'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faUserCircle, faCheck } from '@fortawesome/free-solid-svg-icons'

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

        <Row noGutters style={{'textAlign':'right', 'margin': '30px 0 10px 0'}}>
            <Col xs={4} sm={6}> 
                <ActionButton
                    onClick={() => dispatch({type: 'SELECT_ALL'})}
                >
                    Select All
            </ActionButton>
            </Col>
            <Col xs={8} sm={6}>
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