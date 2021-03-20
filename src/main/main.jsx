import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import styles from './main.module.scss'
import Navigation from '../navigation'
import Content from '../content'
import logo from '../assets/img/logo.svg'

const Main = () => {
  const local = useLocation().pathname
  const [err404, setErr404] = useState(false)
 
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
  return (
    <div className={cls.join(' ')}>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Navigation />
      </header>
      <div className={styles.content}>
        <Content />
      </div>

      {!err404 && <footer className={styles.footer}>© 2020</footer>}
    </div>
  );
}
export default Main