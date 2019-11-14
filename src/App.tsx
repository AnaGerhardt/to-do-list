import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd'
import AddForm from './Forms/AddForm'
import EditForm from './Forms/EditForm'
import ListTable from './Tables/ListTable'


const Container = styled.div`
  margin: 10vh 10vw 10vh 10vw;
  padding: 20px;
  border-style: solid;
  border-color: #AAAA;
  border-width: 1px;
  border-radius: 5px;
`

export interface Item {
  id?: number
  checked?: boolean
  listitem?: string
  name?: string
  length?: number
}

const App = () => {

  const itemArray = [
    { id: 1, listitem: 'Wash clothes' },
    { id: 2, listitem: 'Take pets to the vet' },
    { id: 3, listitem: 'Deposit money' },
  ]

  const [list, setList] = useState<Item[]>(itemArray)
  const [theme, setTheme] = useState(true)
  const [editing, setEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState()

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

  const changeTheme = () => {
    setTheme(!theme)
    theme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')  
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

  return (
    <Container>

      <Row>
        <Col span={12}>
           <h2>My "To Do" List</h2>
        </Col>
        <Col span={12} style={{'textAlign':'right'}}>
          <Button
            onClick={changeTheme}
          >
            {theme ? 'Night Mode' : 'Light Mode'}
          </Button>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          {editing ? 
            (<EditForm editing={editing} setEditing={setEditing} updateItem={updateItem} currentItem={currentItem} />) 
            : 
            (<AddForm addItem={addItem} />)
          }
        </Col>
      </Row>

      <Row>
        <Col>
         <ListTable list={list} deleteItem={deleteItem} editRow={editRow} checkHandler={checkHandler} />
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
  );
}

export default App
