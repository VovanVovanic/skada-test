import React, {useState} from 'react'
import List from './postList'
import Button from '../buttons'
import styles from './posts.module.scss'

const Posts = () => {
  const [view, setView] = useState('list')

  return (
    <div className={styles.posts}>
      <div className = {styles.listHandler}>
        <Button name={'list'} onClick={()=>setView('list')}  active ={view} type={'list'}/>
        <Button name={'tiles'} onClick={()=>setView('tiles')} active ={view} type={'list'}/>
      </div>
      <List />
    </div>
  );
}
export default Posts