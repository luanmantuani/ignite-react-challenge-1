import styles from './EmptyTaskList.module.css'
import EmptyImgIcon from '../../assets/clipboard.png';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={EmptyImgIcon} alt="clipboard icon" />
      <div>
        <strong>You still don't have any tasks registered</strong>
        <p>Create taks and organize your to-do items</p>
      </div>
    </div>
  )
}