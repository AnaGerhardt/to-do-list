import React, { useState } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { Container, Row, Col } from 'react-bootstrap'
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

  const { alert, theme } = props

  const rootStyle = (
    (theme === 'light') ? 
      {'background':'#f3f5f7', 'color': '#232e4d'} 
    : 
      {'background':'#232326', 'color': 'white'}
  )


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container className="root" style={rootStyle}>

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
    const { alert, theme } = state
    return { alert, theme }
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);

export { connectedApp as App }
