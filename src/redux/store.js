import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from './redusers/posts'
import { popupReducer } from './redusers/popup'
import {addPostReducer} from './redusers/addPost'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  posts: postsReducer,
  popup: popupReducer,
  addPost: addPostReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
  

