
import { HashRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Main from './main'

function App() {
  return (
    <div className={styles.App}>
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
