import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { Button, ActionButton, MenuButton } from './Styles/StyledComponents'
import AddForm from './Components/Forms/AddForm'
import EditForm from './Components/Forms/EditForm'
import ListTable from './Components/Tables/ListTable'


export interface Item {
  id?: number
  checked?: boolean
  dateitem?: Date
  listitem?: string
  name?: string
  length?: number
}


const App = () => {

  const [theme, setTheme] = useState('light')

  const categories = {
    1: 'Family',
    2: 'Personal',
    3: 'Travel',
    4: 'Work'
}

  const itemArray = [
    { id: 1, listitem: 'Wash clothes', dateitem: undefined, category: 'Personal' },
    { id: 2, listitem: 'Take pets to the vet', dateitem: undefined, category: 'Personal'},
    { id: 3, listitem: 'Deposit money', dateitem: undefined, category: 'Personal' },
  ]

  const initialFormState = { id: undefined, listitem: '', dateitem: undefined }

  const [list, setList] = useState<Item[]>(itemArray)
  const [editing, setEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState<Item>(initialFormState)

  const addItem = (item: Item) => {
    item.id = list.length + 1
    setList([...list, item])
  }

  const deleteItem = (id: Item) => {
    setList(list.filter((item: Item) => item.id !== id))
  }

  const editRow = (item: Item) => {
    setEditing(true)
    setCurrentItem({ id: item.id, checked: item.checked, listitem: item.listitem })
  }

  const updateItem = (id: Item, updatedItem: Item) => {
    setEditing(false)
    setList(list.map(item => (item.id === id ? updatedItem : item)))
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


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container className="root" style={rootStyle}>

        <Row>
          <Col>
            <h2>My "To Do" List</h2>
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

        <Row>
          <Col lg={6}>
            {editing ? 
              (<EditForm editing={editing} setEditing={setEditing} updateItem={updateItem} currentItem={currentItem} categories={categories} />) 
              : 
              (<AddForm addItem={addItem} categories={categories} />)
            }
          </Col>
        </Row>

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
              deleteItem={deleteItem} 
              editRow={editRow} 
              checkHandler={checkHandler} 
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              onClick={deleteAllChecked}
            >
              Delete All Checked
            </Button>
          </Col>
        </Row>

      </Container>
    </ThemeProvider>
  );
}

export default App
