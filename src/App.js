import React, { useState } from 'react'
import Footer from './Components/Footer'
import AddForm from './Components/Forms/AddForm'
import VisibleList from './Containers/VisibleList'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { ActionButton, MenuButton } from './Styles/StyledComponents'
//import Categories from './Components/Categories'



const App = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const rootStyle = (
    (theme === 'light') ? 
      {'background':'white', 'color': 'grey'} 
      : 
      {'background':'grey', 'color': 'white'}
  )

  // const listFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setList(
  //     list.filter (item => 
  //       item.category === e.currentTarget.value
  //     )
  //   )
  //   console.log(list)
  // }


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
            <MenuButton key={1} /*value={Object.values(Categories)[0]} onClick={listFilter}*/>Family</MenuButton>
            <MenuButton key={2} /*value={Object.values(Categories)[1]} onClick={listFilter}*/>Personal</MenuButton>
            <MenuButton key={3} /*value={Object.values(Categories)[2]} onClick={listFilter}*/>Travel</MenuButton>
            <MenuButton key={4} /*value={Object.values(Categories)[3]} onClick={listFilter}*/>Work</MenuButton>
            <MenuButton key={5} /*onClick={listFilter}*/ style={{'border': 'none'}}>View All</MenuButton>
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
            <Footer />
          </Col>
        </Row>

      </Container>
    </ThemeProvider>
  );
}

export default App
