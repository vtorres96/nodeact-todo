import React, { useContext } from "react";
import { TaskListContext } from '../../contexts/TaskListContext';
import { Delete, Edit } from "@material-ui/icons";

import './styles.css';

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.description}</span>
            <div>
                <Delete onClick={() => removeTask(task.id)} className="btn-delete task-btn" />
                <Edit onClick={() => findItem(task.id)} className="btn-edit task-btn" />
            </div>
        </li>
    ) 
}

export default Task;
