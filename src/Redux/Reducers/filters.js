const filters = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FILTERS':
        return state = true
    default:
      return state
  }
}
export default filters