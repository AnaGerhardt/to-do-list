import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import AddForm from './Forms/AddForm'
import EditForm from './Forms/EditForm'
import ListTable from './Tables/ListTable'



export interface Item {
  id?: number
  checked?: boolean
  dateitem?: Date | string
  listitem?: string
  name?: string
  length?: number
}

const App = () => {

  const [theme, setTheme] = useState(false)

  useEffect(() => {
    theme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
  }, [theme])

  const itemArray = [
    { id: 1, listitem: 'Wash clothes', dateitem: undefined },
    { id: 2, listitem: 'Take pets to the vet', dateitem: undefined },
    { id: 3, listitem: 'Deposit money', dateitem: undefined },
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

  return (
    <Container style={{'marginTop':'5vh'}}>

      <Row>
        <Col>
           <h2>My "To Do" List</h2>
        </Col>
        <Col style={{'textAlign':'right'}}>
          <Button
            onClick={() => setTheme(!theme)}
          >
            {theme ? 'Light Mode' : 'Night Mode'}
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
