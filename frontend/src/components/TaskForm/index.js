import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

import './styles.css';

function TaskForm(){
  const { addTask, clearList, editItem, editTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(editItem){
      editTask(editItem.id, title, description);
    } else {
      addTask(title, description);
    }

    setTitle('');
    setDescription('');
  }

  const handleClearList = (event) => {
    event.preventDefault();
    clearList();
  }

  useEffect(() => {
    if(editItem){
      setTitle(editItem.title);
      setDescription(editItem.description);
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        onChange={handleChangeTitle}
        value={title}
        type="text" 
        className="task-input" 
        placeholder="Add title..."
        required
      />

      <input 
        onChange={handleChangeDescription}
        value={description}
        type="text" 
        className="task-input" 
        placeholder="Add description..."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Editar' : 'Adicionar'}
        </button>
        <button className="btn clear-btn" onClick={handleClearList}>Limpar</button>
      </div>
    </form>
  );
}

export default TaskForm;