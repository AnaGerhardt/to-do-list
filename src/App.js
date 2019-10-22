import React, { useState } from 'react'
import AddForm from './forms/AddForm'
import ListTable from './Tables/ListTable'

const App = () => {

  const listData = [
    { id: 1, listitem: 'Wash clothes' },
    { id: 2, listitem: 'Take pets to the vet' },
    { id: 3, listitem: 'Deposit money' },
  ]

  const [list, setList] = useState(listData)
  const [theme, setTheme] = useState(true)

  const addItem = item => {
    item.id = list.length + 1
    setList([...list, item])
  }

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id))
  }
  
  const deleteAllChecked = () => {
    setList(list.filter(item => !item.checked))
  }

  const changeTheme = () => {
    setTheme(!theme)
    theme ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme') 
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
          <AddForm addItem={addItem} />
        </div>
      </div>

      <div className="flex-row margin-top">
        <div className="flex-large">
         <ListTable list={list} theme={theme} deleteItem={deleteItem} />
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
