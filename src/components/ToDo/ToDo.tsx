import { useState } from 'react';
import { EmptyTaskList } from '../EmptyTaskList/EmptyTaskList';
import { Task } from '../Task/Task';
import { TaskForm } from '../TaskForm/TaskForm';
import { v4 as uuidv4 } from 'uuid';
import styles from './ToDo.module.css';

export function ToDo() {

  const [tasks, setTasks] = useState([] as Task[]);

  const totalTasksCount = tasks.length;
  const totalCompletedTasksCount = tasks.reduce((CompletedTasksCount, currentTask) => {
    if(currentTask.isCompleted){
      CompletedTasksCount++
    }
    return CompletedTasksCount; 
  }, 0);

  function onNewTask(taskDescription: string){
    const task: Task = {
      id: uuidv4(),
      description: taskDescription,
      isCompleted: false
    }
    setTasks([...tasks, task])
  }

  function onDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne: Task[] = tasks.filter((task) => {
      return task.id !== taskId;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  function onTaskCompleted(taskCompleted: Task): void{
    let tasksUpdated = tasks.map((task) => {      
      return task.id === taskCompleted.id ? taskCompleted : task;
    });    
    setTasks(tasksUpdated);
  }

  return (
    <div className={styles.toDo}>
      <TaskForm onNewTask={onNewTask} />

      <div className={styles.taskInfo}>
        <div className={styles.countOfCreatedTask}>
          <strong>Created Tasks</strong>
          <span className={styles.countBadge}>{totalTasksCount}</span>
        </div>
        <div className={styles.countOfCompletedTask}>
          <strong>Completed Tasks</strong>
          <span className={styles.countBadge}>{totalTasksCount === 0 ? '0' : `${totalCompletedTasksCount} of ${totalTasksCount}`}</span>
        </div>
      </div>

      {totalTasksCount > 0 ?
        <div className={styles.taskList}>
          {tasks.filter((task) => task.isCompleted === false ).map((task) => {
            return (
              <Task 
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onTaskCompleted={onTaskCompleted}
              />
            )
          })}
          {tasks.filter((task) => task.isCompleted === true ).map((completedTask) => {
            return (
              <Task 
                key={completedTask.id}
                task={completedTask}
                onDeleteTask={onDeleteTask}
                onTaskCompleted={onTaskCompleted}
              />
            )
          })} 
        </div>
        :
        <div className={styles.taskList}>
          <EmptyTaskList />
        </div>
      }
    </div>
  )
}