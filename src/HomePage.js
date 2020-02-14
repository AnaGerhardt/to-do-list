import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
// import { userActions } from './Redux/Actions'
import { Row, Col } from 'react-bootstrap'
import VisibleList from './Containers/VisibleList'
import { Filters } from './Components'
import { AddForm } from './Components/Forms/AddForm'
import { Button, ActionButton } from './Styles/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFilter } from '@fortawesome/free-solid-svg-icons'

const HomePage = (props) => {

    // componentDidMount() {
    //     this.props.getUsers();
    // }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }
        // const { user, users } = this.props;
    const dispatch = useDispatch()
    const { theme } = props

    return (
    <>
        <Row noGutters>
            <Col xs={2} lg={2}>
                <FontAwesomeIcon icon={faUserCircle} size="3x" />
            </Col>      
            <Col align="left">
                <p style={{'margin': '10px auto 5px 5px'}}>
                    <Link style={theme === 'light' ? {'':''} : {'color':'white'}} to="/login">Logout</Link>
                </p>
            </Col>
            <Col style={{'paddingTop':'3px', 'textAlign':'right'}}>
                <ActionButton
                    onClick={() => dispatch({type: 'TOGGLE_THEME'})}
                >
                    {theme === 'light' ? 'Night Mode' : 'Light Mode'}
                </ActionButton>
            </Col>
        </Row>   <br /><br />

        <Row align="right">
            <Col>  
                <Filters />
            </Col>
        </Row>

        <br />
            {/* <h5>Hi {user.firstName}!</h5> */}
            {/* <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            } */}

            {/* <div align="right">
                <FilterCategoryMenu />
                <FilterMenu />
            </div> */}

        <Row>
            <Col> 
                <AddForm /> 
            </Col>
        </Row>

        <VisibleList />
    </>
    );
}

// function mapState(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }

// const actionCreators = {
//     getUsers: userActions.getAll,
//     deleteUser: userActions.delete
// }

// const connectedHomePage = connect(mapState, actionCreators)(HomePage);
// export { connectedHomePage as HomePage };

function mapState(state) {
    const { theme } = state
    return { theme }
}

const connectedHomePage = connect(mapState)(HomePage);

export { connectedHomePage as HomePage }