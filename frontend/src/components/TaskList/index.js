import React, { useEffect, useState } from 'react';
import api from "../../service/api";

import Task from '../Task';

import './styles.css';

function TaskList(){
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    async function getTasks(){
      try {
        const { data } = await api.get('/');
        setTasks(data);
      } catch (error) {
        console.log('Ocorreu um erro inesperado' + error);
      }
    }
    getTasks();
  }, []);

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