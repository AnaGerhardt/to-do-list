const initialForm = { id: undefined, completed: false, text: '', notes: '', date: '', category: undefined }

const item = (state = initialForm, action) => {
    switch (action.type) {
      case "HANDLE_CHANGE": {
        return {
          ...state, [action.name]: action.value
        }
      }
      case "INITIAL_FORM": {
        state = initialForm
        return state
      }
      default:
        return state
    }
  }
  
  export default item