import React, { useState } from 'react'
import AddForm from './forms/AddForm'
import EditForm from './forms/EditForm'
import ListTable from './Tables/ListTable'

const App = () => {

  const listData = [
    { id: 1, listitem: 'Wash clothes' },
    { id: 2, listitem: 'Take pets to the vet' },
    { id: 3, listitem: 'Deposit money' },
  ]

  const initialFormState = { id: null, name: '' }

  const [list, setList] = useState(listData)
  const [theme, setTheme] = useState(true)
  const [editing, setEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState(initialFormState)

  const addItem = item => {
    item.id = list.length + 1
    setList([...list, item])
  }

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id))
  }

  const editRow = item => {
    setEditing(true)
    setCurrentItem({ id: item.id, name: item.listitem })
  }

  const updateItem = (id, updatedItem) => {
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

  const checkHandler = id => {
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
    <div className="container">

      <div className="flex-row">
        <div className="flex-large">
           <h2 className={theme ? null : "dark-theme"}>My "To Do" List</h2>
        </div>
        <div className="flex-large">
          <div 
            className={'button muted-button float-right margin-top-small'}
            onClick={changeTheme}
          >
            {theme ? 'Night Mode' : 'Light Mode'}
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-large">
          {editing ? 
            (<EditForm editing={editing} setEditing={setEditing} updateItem={updateItem} currentItem={currentItem} />) 
            : 
            (<AddForm addItem={addItem} />)
          }
        </div>
      </div>

      <div className="flex-row margin-top">
        <div className="flex-large">
         <ListTable list={list} deleteItem={deleteItem} editRow={editRow} checkHandler={checkHandler} />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-large">
          <button 
           className="button muted-button"
           onClick={deleteAllChecked}
          >
            Delete All Checked
          </button>
        </div>
      </div>

    </div>
  );
}

export default App
