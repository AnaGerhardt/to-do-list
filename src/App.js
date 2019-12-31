import React, { useState } from 'react'
import Footer from './Components/Footer'
import AddForm from './Components/Forms/AddForm'
import ListTable from './Components/Tables/ListTable'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styles/Themes'
import { ActionButton, MenuButton } from './Styles/StyledComponents'
//import Categories from './Components/Categories'



const App = () => {

  // const itemArray = [
  //   { id: 1, completed: false, listitem: 'Wash clothes', additionalnotes: 'Remember to wash the shoes', dateitem: '2019-12-10', category: 'Personal' },
  //   { id: 2, listitem: 'Take pets to the vet', additionalnotes: 'Ask to brush their teeth too', category: 'Personal'},
  //   { id: 3, listitem: 'Deposit money', additionalnotes: '', category: 'Personal' },
  // ]

  // const [list, setList] = useState<Item[]>(itemArray)
  const [theme, setTheme] = useState('light')

 // const list = useSelector(state => [])

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

  // const addItem = (item: Item) => {
  //   item.id = list.length + 1
  //   setList([...list, item])
  // }

  // const deleteItem = (id: Item) => {
  //   setList(list.filter((item: Item) => item.id !== id))
  // }

  // const checkHandler = (id: Item, item: Item) => {
  //   setList(
  //     list.map (item => {
  //       if (item.id === id) {
  //           item.completed = !item.completed
  //           dispatch(toggleItem(item.id))
  //       }
  //       return item
  //     })
  //   )
  // }

  // const selectAll = () => {
  //   setList(
  //     list.filter (item => {
  //       if ((item.completed === undefined) || (item.completed === false)) {
  //           item.completed = true
  //       }
  //       else { item.completed = false }
  //       return item
  //     })
  //   )
  // }

  // const listFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setList(
  //     list.filter (item => 
  //       item.category === e.currentTarget.value
  //     )
  //   )
  //   console.log(list)
  // }

  // const editRow = (item: Item) => {
  //   setCurrentItem({ 
  //     id: item.id, 
  //     checked: item.checked, 
  //     listitem: item.listitem, 
  //     additionalnotes: item.additionalnotes,
  //     category: item.category 
  //   })
  // }

  // const updateItem = (id: Item, updatedItem: Item) => {
  //   setList(list.map(item => (item.id === id ? updatedItem : item)))
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
            <ListTable 
              //list={list} 
              // setList={setList} 
              // deleteItem={deleteItem}
              // //checkHandler={checkHandler}
              // updateItem={updateItem}
              // selectAll={selectAll}
            />
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
