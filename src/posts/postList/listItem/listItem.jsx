import React from 'react'
import styles from './listItem.module.scss'
import { ReactComponent as Arrow } from "../../../assets/img/arrow.svg";
import page from "../../../assets/img/pic.svg";

const ListItem = ({name, tiles}) => {
  const cls = [
    styles.listItem
  ]

tiles && cls.push(styles.tiles)
  return (
    <li className={cls.join(' ')}>
      {tiles && <img src={page} alt = 'img'/>}
      <div className = {styles.itemContent}>
        <span>{name}</span> <Arrow className={styles.arrow} />
      </div>
    </li>
  );
}
export default ListItem