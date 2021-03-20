import React from 'react'
import styles from './error.module.scss'

import error from '../assets/img/404.svg'
import { useHistory } from 'react-router'

const Page404 = () => {
const history = useHistory()
  const onHomeRedirect = () => {
    history.push('/')
  }
  return (
    <div className={styles.errorContent}>
      <img src={error} alt="404 error" className={styles.errorImg} />
      <button className={styles.errorBtn} onClick={onHomeRedirect}>
        go to home
      </button>
    </div>
  );
}
export default Page404