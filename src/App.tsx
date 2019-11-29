import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { ActionButton, MenuButton } from './Styles/StyledComponents'
import AddForm from './Components/Forms/AddForm'
import ListTable, { Item } from './Components/Tables/ListTable'



const App = () => {

  const itemArray = [
    { id: 1, listitem: 'Wash clothes', dateitem: undefined, category: 'Personal' },
    { id: 2, listitem: 'Take pets to the vet', dateitem: undefined, category: 'Personal'},
    { id: 3, listitem: 'Deposit money', dateitem: undefined, category: 'Personal' },
  ]

  const [list, setList] = useState<Item[]>(itemArray)
  const initialFormState = { id: undefined, listitem: '', dateitem: undefined }
  const [currentItem, setCurrentItem] = useState<Item>(initialFormState)
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

  const addItem = (item: Item) => {
    item.id = list.length + 1
    setList([...list, item])
  }

  const deleteItem = (id: Item) => {
    setList(list.filter((item: Item) => item.id !== id))
  }

  const deleteAllChecked = () => {
    setList(list.filter(item => !item.checked))
  }

  const checkHandler = (id: Item) => {
    setList(
      list.map (item => {
        if (item.id === id) {
            item.checked = !item.checked
        }
        return item
      })
    )
  }

  const editRow = (item: Item) => {
    setCurrentItem({ id: item.id, checked: item.checked, listitem: item.listitem })
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container className="root" style={rootStyle}>

        <Row>
          <Col> 
            <AddForm addItem={addItem} />
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
            <MenuButton>Family</MenuButton>
            <MenuButton>Personal</MenuButton>
            <MenuButton>Travel</MenuButton>
            <MenuButton>Work</MenuButton>
            <MenuButton style={{'border': 'none'}}>View All</MenuButton>
          </Col>
        </Row>

        <Row>
          <Col>
            <ListTable 
              list={list} 
              setList={setList} 
              deleteItem={deleteItem}
              deleteAllChecked={deleteAllChecked}
              checkHandler={checkHandler}
            />
          </Col>
        </Row>

      </Container>
    </ThemeProvider>
  );
}

export default App
