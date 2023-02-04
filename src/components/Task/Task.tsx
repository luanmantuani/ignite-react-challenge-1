import { Trash, Circle, CheckCircle, IconWeight } from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onTaskCompleted: (task: Task) => void;
}

export function Task({task, onDeleteTask, onTaskCompleted}: TaskProps){

  const [toDoCheckBoxWeight, setToDoCheckBoxWeight] = useState(('regular' as IconWeight));
  const [taskCompleted, setTaskCompleted] = useState(task.isCompleted);

  function handleTaskCompleted(): void{
    setTaskCompleted(!task.isCompleted);
    task.isCompleted = !task.isCompleted;
    onTaskCompleted(task);
  }

  function handleToDoCheckBoxWeightMouseOver(): void{
    setToDoCheckBoxWeight('duotone' as IconWeight);
  }

  function handleToDoCheckBoxWeightMouseOut(): void{
    setToDoCheckBoxWeight('regular' as IconWeight);
  }

  function handleDeleteTask(){
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.taskItem}>
      <button 
        className={`${styles.taskCheckboxBtn} ${taskCompleted ? styles.taskCompletedCheckbox : styles.taskToDoCheckbox}`}
        onMouseOver={handleToDoCheckBoxWeightMouseOver}
        onMouseOut={handleToDoCheckBoxWeightMouseOut}
        onClick={handleTaskCompleted}
      >
        {taskCompleted ? (
            <CheckCircle size={24} weight={'fill'}>
              <polyline points="172 104 113.3 160 84 132" fill="none" stroke={"var(--gray-100)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
            </CheckCircle>
          ) : (
            <Circle size={24} weight={toDoCheckBoxWeight}/>
          )
        }
      </button>
      
      <p className={`${styles.taskDescription} ${taskCompleted ? styles.taskCompletedDescription : styles.taskToDoDescription}`}>
        {task.description}
      </p>
      
      <button 
        className={styles.taskDeleteBtn}
        onClick={handleDeleteTask}
      >
        <Trash size={24}/>
      </button>
    </div>
  )
}