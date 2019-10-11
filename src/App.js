import React, { useState } from 'react'
import AddForm from './forms/AddForm'
import ListTable from './tables/ListTable'

const App = () => {

  const listData = [
    { id: 1, text: 'Wash clothes' },
    { id: 2, text: 'Bring pets to the vet' },
    { id: 3, text: 'Deposit money' },
  ]

  const initialFormState = { id: null, text: '' }
  const [list, setList] = useState(listData)

  const addItem = item => {
    item.id = list.length + 1
    setList([...list, item])
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
         <ListTable list={list} />
        </div>
      </div>

    </div>
  );
}

export default App
