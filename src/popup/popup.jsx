import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { resetUser, fetchUserData } from "../redux/actions/popup";
import styles from './popup.module.scss'
import { ReactComponent as Times } from "../assets/img/times.svg";

const PopUp = () => {
  const dispatch = useDispatch()

  const name = useSelector((state) => state.popup.user.title)
  const info = useSelector((state) => state.popup.user.body)
  const comments = useSelector((state) => state.popup.comments)
  const display = useSelector((state) => state.popup.display)
  const id = useSelector((state) => state.popup.user.userId)

  const onReset = () => {
    dispatch(resetUser());
  }
  const onLoadMore = () => {
    dispatch(fetchUserData(id));
  }
  let isShown = display && styles.show

  const list = comments.map((el,i) => {
    return (
      <li key={i}  className={styles.commentItem}>
        <span>{`${el.name} (${el.email})`}</span>
        <p>{el.body}</p>
      </li>
    );
  })
  return (
    <div className={styles.overlay + ' ' + isShown}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <div className={styles.popupName}>
            <p>{name}</p>
            <Times className={styles.times} onClick={onReset}/>
          </div>
          <div className={styles.popupInfo}>
            {info}
          </div>
        </div>
        <div className={styles.popupContent}>
          <h4>comments</h4>
          <ul className={styles.commentsList}>
            {list}
          </ul>
          <button className={styles.popupButton} onClick={onLoadMore}> load more</button>
        </div>
      </div>
    </div>
  );
}
export default PopUp