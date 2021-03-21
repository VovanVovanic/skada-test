import { addData } from "../../api/api";

export const ADD_POST = "ADD_POST";
export const SET_LOADING = "SET_LOADING";

export const addPost = (message) => {
  return { type: ADD_POST, message };
};

export const setLoading = (loading) => {
  return { type: SET_LOADING, loading };
};

export const fetchAddPost = (data) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await addData(data);
    if (res.text) {
      dispatch(addPost(res.text))
      setTimeout(() => {
       dispatch(addPost('')) 
      },5000)
    }
  } catch (e) {
    console.log(e);
  }
  dispatch(setLoading(false))
};
