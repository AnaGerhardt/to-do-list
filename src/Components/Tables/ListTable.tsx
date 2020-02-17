import React from 'react'
import { useDispatch } from 'react-redux'
import { EditForm } from '../Forms/EditForm'
import { TaskButton, ActionButton } from '../../Styles/StyledComponents'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export interface Item {
    id?: number
    completed?: boolean
    text?: string
    date?: Date | string
    category?: string
    name?: string
    length?: number
}

interface IProps {
    list: Item[]
}

const ListTable = (props: IProps) => {

    const dispatch = useDispatch()
    const { list } = props

    const handleTaskClick = (item: Item) => {
        dispatch({type: 'TOGGLE_ITEM'})
        item.completed = !item.completed
    }

    return (
    <>   
        <ul style={{'margin':'0 0 15px 0'}}>
        {list.length > 0 ? (
            list.map((item) => (    
                <li key={item.id}>
                    <TaskButton 
                        className={(item.completed ? 'completedtask taskbutton' : 'taskbutton')} 
                    >
                        <div
                            className={(item.completed ? 'checkmark' : 'checkbox-round')} 
                            style={{'display':'inline-block'}}  
                            // value={item.completed}
                            onClick={() => handleTaskClick(item)}
                        >
                            {item.completed ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </div>
                        {item.text}
                        {(item.completed) ? '' : (
                            <EditForm item={item} />
                        )}
                    </TaskButton>
                </li>
            ))
            ) : (
                <p style={{'margin': '20px 0 20px 0'}}>No tasks to show.</p>
        )}
        </ul>

        <Row noGutters style={{'textAlign':'right', 'margin': '40px 0 10px 0'}}>
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