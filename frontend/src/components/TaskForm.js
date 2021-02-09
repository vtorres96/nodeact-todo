import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!editItem){
            addTask(description);
            setDescription('');
        } else {
           editTask(editItem.id, description) 
        }
    }

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClearList = (e) => {
        e.preventDefault()
        clearList()
    }

    useEffect(() => {
        if(editItem){
            setDescription(editItem.description)
        } else {
            setDescription("")
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange}
                value={description}
                type="text" 
                className="task-input"
                placeholder="Add task..."
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
