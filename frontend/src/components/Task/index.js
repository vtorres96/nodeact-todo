import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext';

import './styles.css';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

function Task({ task }){
  const { removeTask } = useContext(TaskContext);

  return (
    <li className="list-item">
      <span>{task.description}</span>
      <div>
        <Delete className="btn-icons" onClick={() => removeTask(task.id)}/>
        <Edit className="btn-icons"/>
      </div>
    </li>
  );
}

export default Task;