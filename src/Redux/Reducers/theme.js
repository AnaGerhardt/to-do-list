const theme = (state = 'light', action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      let newState = (state === 'light') ? 'dark' : 'light'
      return newState
    }
    default:
      return state
  }
}
  
export default theme