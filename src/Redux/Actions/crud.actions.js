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