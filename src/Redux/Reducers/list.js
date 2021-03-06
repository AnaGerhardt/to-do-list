
const itemArray = [
  { id: 1, completed: false, text: 'Wash clothes', date: '2019-12-10', category: 'Personal' },
  { id: 2, completed: false, text: 'Take pets to the vet', date: '', category: 'Personal'},
  { id: 3, completed: true, text: 'Deposit money', date: '', category: 'Personal' },
  { id: 4, completed: true, text: 'Do shopping', date: '', category: 'Personal' },
]

const list = (state = itemArray, action) => {
    switch (action.type) {
      case "ADD_ITEM": {
        const item = action.item
        item.id = state.length + 1
        return [...state, item]
      }
      case 'TOGGLE_ITEM':
        return state.map(item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        )
      case 'UPDATE_ITEM':
        return state.map(item => 
          (item.id === action.id ? action.updatedItem : item) 
      )
      case 'DELETE_ITEM':
        return state.filter(item =>
          item.id !== action.id
        )
      case 'DELETE_ALL':
        return state.filter(item =>
          !item.completed
        )
      case 'SELECT_ALL':
        return state.filter(item => {
          if ((item.completed === undefined) || (item.completed === false)) {
            item.completed = true
          }
          else { item.completed = false }
        return item
        })
      default:
        return state
    }
  }
  
  export default list