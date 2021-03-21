import { GET_POSTS, SET_EMPTY } from "../actions/posts";

const initState = {
  count: 0,
  empty: false,
  posts:[]
}

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, count: state.count + 4, posts: [...state.posts, ...action.posts] }
    case SET_EMPTY:
      return {...state, empty:true}
    default: return state
  }
}