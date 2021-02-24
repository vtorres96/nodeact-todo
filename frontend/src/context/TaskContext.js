import React, { createContext, useEffect, useState } from 'react'
import api from '../service/api'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null);

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

  const addTask = async (title, description) => {
    try {
      const { data } = await api.post('/', {
        title,
        description
      });
      setTasks([...tasks, data]);
    } catch (error) {
      console.log('Ocorreu um erro ao adicionar o registro' + error);
    }
  }

  const removeTask = async (id) => {
    try {
      await api.delete('/' + id)
      const tasksFiltered = tasks.filter(task => task.id !== id);
      setTasks(tasksFiltered);
    } catch (error) {
      console.log('Ocorreu um erro ao excluir o registro ' + error);
    }
  }

  const findItem = async (id) => {
    try {
      const { data } = await api.get('/' + id);
      setEditItem(data);
    } catch (error) {
      console.log('Ocorreu um erro ao obter o registro ' + error);
    }
  }

  const editTask = async (id, title, description) => {
    const { data } = await api.put('/' + id, { title, description });
    const newTasks = tasks.map(task => task.id === id ? data : task);
    setTasks(newTasks);
    setEditItem(null);
  }

  const doneTask = async (id) => {
    try {
      await api.put('/' + id, { done: true });
      const newTasks = tasks.filter(task => task.id !== id);
      setTasks(newTasks);
    } catch (error) {
      console.log('Ocorreu um erro ao finalizar a tarefa ' + error);
    }
  }

  const clearList = () => {
    setTasks([]);
  }

  return (
    <TaskContext.Provider
      value={{ 
        tasks,
        addTask,
        clearList,
        removeTask,
        findItem,
        editItem,
        editTask,
        doneTask
      }} 
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;