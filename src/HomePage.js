import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { userActions } from './Redux/Actions'
import { Row, Col } from 'react-bootstrap'
import VisibleList from './Containers/VisibleList'
import { FilterCategoryMenu, FilterMenu } from './Components'
import { AddForm } from './Components/Forms/AddForm'
import { Button } from './Styles/StyledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFilter } from '@fortawesome/free-solid-svg-icons'

export class HomePage extends React.Component {

    // componentDidMount() {
    //     this.props.getUsers();
    // }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }

    render() {
        // const { user, users } = this.props;
        return (
        <>
            <Row noGutters>
                <Col lg={2}>
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                </Col>      
                <Col align="left">
                    <p style={{'margin': '10px auto 5px 0'}}>
                        <Link to="/login">Logout</Link>
                    </p>
                </Col>
            {/* <Col>
                <div style={{'textAlign':'right'}}>
                <ActionButton
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? 'Night Mode' : 'Light Mode'}
                </ActionButton>
                </div>
            </Col> */}
            </Row>   <br />

            <Row align="right">
                <Col>
                    <Button>
                        <FontAwesomeIcon icon={faFilter} size="sm" style={{'marginRight':'8px'}} />Filters 
                    </Button>   
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