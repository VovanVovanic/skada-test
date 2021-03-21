import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from './list.module.scss'
import ListItem from './listItem/listItem';

const List = ({ tiles }) => {

  const cls = [
    styles.list
  ]

  tiles && cls.push(styles.tiles)

  const posts = useSelector((state) => state.posts.posts)
  const postList = posts.slice(3, posts.length)
    .map((el) => {
      return <ListItem
        name={el.title}
        key={el.title}
        tiles={tiles}
      />;
  })
  return (
    <ul className={ cls.join(' ')}>
      {postList}
    </ul>
  )
}
export default List