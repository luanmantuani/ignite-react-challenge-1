import styles from './Header.module.css';

import LogoToDo from '../../assets/logo.svg';

export function Header() {
  return (<header className={styles.header}>
    <img 
      src={LogoToDo} 
      alt="Logotipo projeto ToDo"
      id="HeaderLogo"
    ></img>
  </header>);
}