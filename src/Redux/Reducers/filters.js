const filters = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_FILTERS':
        (state === false) ? (state = true) : (state = false)
        return state
    default:
      return state
  }
}
export default filters