import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from './Redux/Actions'
import { Form } from 'react-bootstrap'
import { Button, MenuButton } from './Styles/StyledComponents'

const RegisterPage = (props) => {

    const userArray = { 
        user: { firstName: '', lastName: '', username: '', password: '' }, 
        submitted: false 
    }

    const [registerUser, setRegisterUser] = useState(userArray)
    const { registering } = props

    const handleChange = (event) => {
        const { name, value } = event.target
        const { user } = registerUser
        setRegisterUser({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRegisterUser({ submitted: true })
        const { user } = registerUser
        if (user.firstName && user.lastName && user.username && user.password) {
            props.register(user)
        }
        setRegisterUser(userArray)
    }

    const { 
        submitted, 
        firstName,
        lastName,
        username,
        password
    } = registerUser

    return (
        <>
            <h5 style={{'textAlign':'center'}}>Register</h5>

            <Form name="form" style={{'marginTop':'30px'}}onSubmit={handleSubmit}>
                <Form.Group className={(submitted && !firstName ? 'has-error' : '')}>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} />
                    {submitted && !firstName &&
                        <div className="help-block">First Name is required</div>
                    }
                </Form.Group>
                <Form.Group className={(submitted && !lastName ? ' has-error' : '')}>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} />
                    {submitted && !lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
                </Form.Group>
                <Form.Group className={(submitted && !username ? ' has-error' : '')}>
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control type="text" name="username" value={username} onChange={handleChange} />
                    {submitted && !username &&
                        <div className="help-block">Username is required</div>
                    }
                </Form.Group>
                <Form.Group className={(submitted && !password ? ' has-error' : '')}>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={handleChange} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                </Form.Group>
                <Form.Group>
                    <Button>Register</Button>
                    {registering && 
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                    <Link to="/login">
                        <MenuButton style={{'border': 'none'}}>Cancel</MenuButton>
                    </Link>
                </Form.Group>
            </Form>
        </>
    );
}


function mapState(state) {
    const { registering } = state.registration
    return { registering }
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage)
export { connectedRegisterPage as RegisterPage }