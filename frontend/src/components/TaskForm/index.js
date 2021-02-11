import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../contexts/TaskListContext';

import './styles.css';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!editItem){
            addTask(title, description);
            setTitle('');
            setDescription('');
        } else {
           editTask(editItem.id, title, description) 
        }
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleClearList = (e) => {
        e.preventDefault()
        clearList();
    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title);
            setDescription(editItem.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editItem])

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
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button onClick={handleClearList} className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
