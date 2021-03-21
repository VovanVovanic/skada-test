import {ADD_POST, SET_LOADING}from '../actions/addPost'
const initState = {
  loading: false,
  message: ''
}
export const addPostReducer = (state=initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, message: action.message }
    case SET_LOADING:
      return{...state, loading: action.loading}
    default: return state
  }
}