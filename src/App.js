import React, { useState } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { ActionButton } from './Styles/StyledComponents'
import { history } from './Helpers/history'
import { alertActions } from './Redux/Actions'
import { PrivateRoute } from './Components/PrivateRoute'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage';


const App = (props) => {

  history.listen((location, action) => {
      // clear alert on location change
      props.clearAlerts()
  })

  const { alert } = props

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const rootStyle = (
    (theme === 'light') ? 
      {'background':'white', 'color': 'grey'} 
    : 
      {'background':'grey', 'color': 'white'}
  )


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container className="root" style={rootStyle}>

        <Row>
          <Col><h4>Todo App</h4></Col>
          <Col style={{'textAlign':'right'}}>
            <ActionButton
              onClick={toggleTheme}
            >
              {theme === 'light' ? 'Night Mode' : 'Light Mode'}
            </ActionButton>
          </Col>
        </Row>

        <br />

            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/homepage" component={HomePage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>

      </Container>
    </ThemeProvider>
  );
}

function mapState(state) {
    const { alert } = state
    return { alert }
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App }
