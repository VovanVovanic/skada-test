import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import styles from './main.module.scss'
import Navigation from '../navigation'
import Content from '../content'
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from '../redux/actions/posts'
import logo from '../assets/img/logo.svg'

const Main = () => {
  const local = useLocation().pathname

  const [err404, setErr404] = useState(false)

  const dispatch = useDispatch();

  const count = useSelector((state) => state.posts.count)
  const empty = useSelector((state) => state.posts.empty)
 
  useEffect(() => {
    dispatch(fetchPosts(0, 11));
  },[])
  useEffect(() => {
    if (local === "/" || local === "/addPost") {
      setErr404(false);
    } else {
      setErr404(true);
    }
},[local])
  
  const cls = [
    styles.main
  ]

  err404 && cls.push(styles.error)

  const postLoadHandler = () => {
    dispatch(fetchPosts(count));
  }
  
  return (
    <div className={cls.join(" ")}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Navigation />
      </header>
      <div className={styles.content}>
        <Content />
        {!empty && (
          <div className={styles.loadBtn}>
            <button onClick={postLoadHandler}>load more</button>
          </div>
        )}
      </div>

      {!err404 && <footer className={styles.footer}>© 2020</footer>}
    </div>
  );
}
export default Main