import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

import Task from '../Task';

import './styles.css';

function TaskList(){
  const { tasks } = useContext(TaskContext);
  
  return (
    <div>
      {tasks.length ? (
        <ul className="list-tasks">
          {tasks.map(task => {
            return <Task task={task} key={task.id}/>
          })}
        </ul>
      ) : (
        <div className="no-tasks">Não existem tarefas</div>
      )}
    </div>
  );
}

export default TaskList;