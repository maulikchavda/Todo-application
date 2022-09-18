const todoReducer = (state, action) => {
  switch (action.type) {
    case 'getTodayTodo':
      return {
        ...state,

      }
    default:
      throw new Error('Unexpected action')
  }
}

export default todoReducer