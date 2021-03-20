import React from 'react'
import styles from './main.module.scss'
import Navigation from '../navigation'
import Content from '../content'
import logo from '../assets/img/logo.svg'

const Main = () => {

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Navigation />
      </header>
      <Content />
      <footer className={styles.footer}>© 2020</footer>
    </div>
  );
}
export default Main