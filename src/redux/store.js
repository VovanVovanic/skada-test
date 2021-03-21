import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {postsReducer} from './redusers/posts'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
 posts: postsReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
  

