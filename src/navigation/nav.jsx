import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss'

const Navigation = () => {
  const cls = [
    styles.nav
  ]
    const navLinks = [
      { name: "home", to: '/' },
      { name: "new post", to:'/addPost' },
    ].map((el) => {
      return (
        <NavLink
          key={el.name}
          to={el.to}
          className={cls.join(" ")}
          activeClassName={styles.active}
          exact={true}
        >
          {el.name}
        </NavLink>
      );
    });
  return <div> {navLinks}</div>;
}
export default Navigation