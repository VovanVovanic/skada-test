import React, {useState} from 'react'
import List from './postList'
import Button from '../buttons'
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";
import styles from './posts.module.scss'

const Posts = () => {
  const [view, setView] = useState('list')
  const count = useSelector((state) => state.posts.count);
  const empty = useSelector((state) => state.posts.empty);
  
  const dispatch = useDispatch();

  const postLoadHandler = () => {
    dispatch(fetchPosts(count));
  }
  
  return (
    <div className={styles.posts}>
      <div className={styles.listHandler}>
        <Button
          name={"list"}
          onClick={() => setView("list")}
          active={view}
          type={"list"}
        />
        <Button
          name={"tiles"}
          onClick={() => setView("tiles")}
          active={view}
          type={"list"}
        />
      </div>
      <List tiles={view === "tiles" ? true : false} />
      {!empty && (
        <div className={styles.loadBtn}>
          <button onClick={postLoadHandler}>load more</button>
        </div>
      )}
    </div>
  );
}
export default Posts