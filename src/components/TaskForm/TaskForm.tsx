import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  onNewTask: (description: string) => void;
}

export function TaskForm({onNewTask}: TaskFormProps) {
  const [taskDescription, setTaskDescription] = useState('');
  const taskDescriptionEmpty = taskDescription.trim().length === 0;

  function handleTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setTaskDescription(event.target.value);
  }
  
  function handleTaskDescriptionInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('This field is required');
  }

  function handleSubmitTaskForm(event: FormEvent){
    event.preventDefault();
    onNewTask(taskDescription);
    setTaskDescription('');
  }

  return (
    <form className={styles.taskForm} onSubmit={handleSubmitTaskForm}>
      <input
        type="text"
        className={styles.taskInput}
        placeholder="Add a new task"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        onInvalid={handleTaskDescriptionInvalid}
      />
      <button
        type='submit'
        className={styles.taskAddBtn}
        disabled={taskDescriptionEmpty}
      >
        Add
        <PlusCircle 
          size={20}
          weight={"bold"}
        />
      </button>
    </form>
  )
}