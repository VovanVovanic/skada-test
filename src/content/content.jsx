import React from 'react'
import Posts from '../posts'
import NewPost from '../newPostForm'
import Page404 from '../404'
import { Redirect, Route, Switch } from "react-router-dom";
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Posts />} />
      <Route exact path="/addPost" render={() => <NewPost />} />
      <Route path={"*"} render={() => <Page404 />} />
      <Redirect from={"*"} to={"/404"} />
    </Switch>
  );
}
export default Content