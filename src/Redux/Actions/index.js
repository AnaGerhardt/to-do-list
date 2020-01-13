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

export const toggleItem = () => ({
  type: 'TOGGLE_ITEM'
})

export const updateItem = (id, updatedItem) => ({
  type: 'UPDATE_ITEM',
  id,
  updatedItem
})

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  id
})

export const deleteAll = () => ({
  type: 'DELETE_ALL'
})

export const selectAll = () => ({
  type: 'SELECT_ALL'
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setCategoryFilter = filter => ({
  type: 'SET_CATEGORY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const CategoryFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAMILY: 'SHOW_FAMILY',
  SHOW_PERSONAL: 'SHOW_PERSONAL',
  SHOW_TRAVEL: 'SHOW_TRAVEL',
  SHOW_WORK: 'SHOW_WORK'
}