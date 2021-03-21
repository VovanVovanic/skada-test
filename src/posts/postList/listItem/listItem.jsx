import React from 'react'
import styles from './listItem.module.scss'
import { ReactComponent as Arrow } from "../../../assets/img/arrow.svg";

const ListItem = ({name}) => {
  const cls = [
    styles.listItem
  ]

  return (
    <li className={cls.join(' ')}>
      <div className = {styles.itemContent}>
        {name} <Arrow className={styles.arrow} />
      </div>
    </li>
  );
}
export default ListItem