import { getData } from "../../api/api";

export const SET_USER = "SET_USER";
export const SET_COMMENTS = 'SET_COMMENTS'
export const RESET_USER = 'RESET_USER'

export const setUser = (user) => {
  return { type: SET_USER, user };
};
export const setComments = (comments) => {
  return { type: SET_COMMENTS, comments};
};

export const resetUser = () => {
  return{type: RESET_USER}
}

export const fetchUserData = (id) => async (dispatch) => {
  try {
    const res = await getData(id);
    dispatch(setComments(res))
  } catch (e) {
    console.log(e);
  }
};
