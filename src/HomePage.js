import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { userActions } from './Redux/Actions'
import VisibleList from './Containers/VisibleList'
import { FilterCategoryMenu, FilterMenu } from './Components'

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

                <br />

                {/* <div align="right">
                  <FilterCategoryMenu />
                  <FilterMenu />
                </div> */}

                <VisibleList />

                <p align="right">
                    <Link to="/login">Logout</Link>
                </p>
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