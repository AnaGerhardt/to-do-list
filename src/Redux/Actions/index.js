//import  { Item } from '../../Components/Tables/ListTable'

export const initialFormAction = (item) => {
  return {
    type: "INITIAL_FORM",
    item
  }
}

export const handleChange = (name, value) => {
  return {
      type: "HANDLE_CHANGE",
      name,
      value
  }
}

export const addItem = (item) => {
  return {
      type: "ADD_ITEM",
      item
  }
}

export const toggleItem = (id) => ({
  type: 'TOGGLE_ITEM',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}