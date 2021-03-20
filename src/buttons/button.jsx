import React from 'react'
import styles from './buttons.module.scss'

const Button = ({ name, type }) => {
  const cls = [
    styles.button
  ]
  type === 'cancel' && cls.push(styles.cancel)
  return (
    <button className={cls.join(' ')} type={type}>{name}</button>
  )
}
export default Button