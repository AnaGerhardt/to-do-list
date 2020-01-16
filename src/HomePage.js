import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { userActions } from './Redux/Actions'
import FilterCategoryMenu from './Components/CategoryFilterMenu'
import FilterMenu from './Components/FilterMenu'
import VisibleList from './Containers/VisibleList'
import AddForm from './Components/Forms/AddForm'


const HomePage = (props) => {

    props.getUsers()

    const handleDeleteUser = (id) => {
        props.deleteUser(id)
    }

    const { user, users } = props

    return (
        <Container>
            <h1>Hi {user.firstName}!</h1>
            <p>You're logged in with React!!</p>
            <h3>All registered users:</h3>
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
                                : <span> - <a onClick={handleDeleteUser(user.id)}>Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>

            <Row style={{'marginTop':'20px'}}>
                <Col style={{'textAlign':'center'}}>
                    <FilterCategoryMenu /> 
                </Col>
            </Row>

            <Row>
                <Col>
                    <VisibleList />
                </Col>
            </Row>

                <br />

            <Row>
                <Col>
                     <FilterMenu />
                </Col>
            </Row>
        </Container>
    );

}


function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);

export { connectedHomePage as HomePage };