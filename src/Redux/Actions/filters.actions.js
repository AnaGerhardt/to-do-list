export const toggleItem = () => ({
    type: 'TOGGLE_ITEM'
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