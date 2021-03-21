import { getPosts } from '../../api/api'

export const GET_POSTS = 'GET_POSTS'
export const SET_EMPTY = 'SET_EMPTY'

export const setPosts = (posts) => {
  return { type: GET_POSTS, posts }
}
export const setEmpty = () => {
  return { type: SET_EMPTY }
}


export const fetchPosts = (count) => async (dispatch) => {
  try {
    const res = await getPosts(count)
    if (!res.length) {
      dispatch(setEmpty())
    } else {
      dispatch(setPosts(res));
    }
  } catch (e) {
    console.log(e);
  }

}