
import { HashRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Main from './main'
import PopUp from './popup'
import { useSelector } from "react-redux";

function App() {
  const display = useSelector((state) => state.popup.display);
   let isShown = display && styles.noscroll;
  return (
    <div className={styles.App + ' ' + isShown}>
      <HashRouter>
        <Main />
        <PopUp />
      </HashRouter>
    </div>
  );
}

export default App;
