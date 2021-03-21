import {SET_USER, SET_COMMENTS, RESET_USER} from '../actions/popup'
const initState = {
  display: false,
  user: {},
  comments:[]
}

export const popupReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, display: true, user: action.user }
    case SET_COMMENTS: 
      return { ...state, comments: [...state.comments, ...action.comments] }
    case RESET_USER:
      return{...state, display:false, user:{}, comments:[]}
    default: return state
  }
}