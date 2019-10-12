import React, { useState } from 'react'
import AddForm from './forms/AddForm'
import ListTable from './tables/ListTable'

const App = () => {

  const listData = [
    { id: 1, listitem: 'Wash clothes' },
    { id: 2, listitem: 'Bring pets to the vet' },
    { id: 3, listitem: 'Deposit money' },
  ]

  //const initialFormState = { id: null, text: '' }
  const [list, setList] = useState(listData)

  const addItem = item => {
    item.id = list.length + 1
    setList([...list, item])
  }

  const deleteItem = id => {
    setList(list.filter(item => item.id !== id))
  }

  const deleteAll = props => {
    setList(list.filter(item => item.checked !== item.id))
  }

  return (
    <div className="container">

      <div className="flex-row">
        <div className="flex-large">
          <AddForm addItem={addItem} />
        </div>
      </div>

      <div className="flex-row margin-top">
        <div className="flex-large">
         <ListTable list={list} deleteItem={deleteItem} />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-large">
          <button 
           className="button muted-button"
           onClick={() => deleteAll()}
          >
            Delete All Checked
          </button>
        </div>
      </div>

    </div>
  );
}

export default App
