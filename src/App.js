import React, { useState } from 'react'
import FilterCategoryMenu from './Components/CategoryFilterMenu'
import FilterMenu from './Components/FilterMenu'
import AddForm from './Components/Forms/AddForm'
import VisibleList from './Containers/VisibleList'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { ActionButton } from './Styles/StyledComponents'


const App = () => {

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
          <Col> 
            <AddForm />
          </Col>
          <Col style={{'textAlign':'right'}}>
            <ActionButton
              onClick={toggleTheme}
            >
              {theme === 'light' ? 'Night Mode' : 'Light Mode'}
            </ActionButton>
          </Col>
        </Row>

        <br />

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
    </ThemeProvider>
  );
}

export default App
