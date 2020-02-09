import React  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Row, Col } from 'react-bootstrap'
import { ActionButton, MenuButton } from './Styles/StyledComponents'
import { userActions } from './Redux/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
        <>
            <Row>
                <Col align="center">
                    <FontAwesomeIcon icon={faUserCircle} size="5x" />
                </Col> 
            </Row>
            <Row style={{'marginTop':'8px'}}>
                <Col>
                    <p align='center'>Welcome!</p>
                </Col>
            </Row>
            
             <br />

            <div style={{'textAlign': 'center'}}>
                <Form 
                    name="form" 
                    onSubmit={this.handleSubmit} 
                    style={{'display':'inline-block','marginLeft':'auto', 'marginRight':'auto', 'textAlign':'left'}}
                >
                    <Row>
                        <Col lg='12' md='6' sm='6' xs='8'>
                            <Form.Group className={(submitted && !username ? ' has-error' : '')}>
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control type="text" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12' md='6' sm='6' xs='8'>
                            <Form.Group className={(submitted && !password ? ' has-error' : '')}>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group style={{'margin': '20px 0 10px 0'}}>
                        <ActionButton>Login</ActionButton>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register">
                            <MenuButton style={{'border': 'none'}}>Register</MenuButton>
                        </Link>
                        <Link to="/homepage">
                            <MenuButton style={{'border': 'none', 'float':'right', 'lineHeight':'2'}}>Skip</MenuButton>
                        </Link>
                    </Form.Group>
                </Form>
            </div>
        </>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication
    return { loggingIn }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export { connectedLoginPage as LoginPage }