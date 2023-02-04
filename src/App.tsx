import { Header } from './components/Header/Header';
import { ToDo } from './components/ToDo/ToDo';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <ToDo />
      </main>
    </div>
  )
}