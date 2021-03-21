import React from 'react'
import styles from './buttons.module.scss'

const Button = ({ name, type, active, onClick }) => {
  const cls = [
    styles.button
  ]
  type === 'cancel' && cls.push(styles.cancel)
  type === 'list' && cls.push(styles.list)
  active === name && cls.push(styles.active)
  return (
    <button
      className={cls.join(' ')}
      type={type}
      onClick={onClick}
    >{name}</button>
  )
}
export default Button