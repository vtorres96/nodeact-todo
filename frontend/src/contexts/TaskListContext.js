import React, { createContext, useState, useEffect } from "react";
import api from '../services/api';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        async function getItems() {
            try {
              const { data } = await api.get("/");
              setTasks(data);
            } catch (error) {
              console.log("Ocorreu um erro ao buscar os itens" + error);
            }
        }
        getItems();
    }, []);

    const addTask = async (title, description) => {
        try {
            let { data } = await api.post("/", {
                title,
                description
            });

            setTasks([...tasks, data ]);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar os items" + error);
        }
    }

    const editTask = async (id, title, description) => {
        let { data } = await api.put(`/${id}`, { title, description });
        const newTasks = tasks.map(task => task.id === id ? data : task);

        setTasks(newTasks);
        setEditItem(null);
    }

    const removeTask = async (id) => {
        try {
            await api.delete(`/${id}`);

            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.log("Ocorreu um erro ao buscar os items" + error);
        }
    }

    const clearList = () => {
        setTasks([]);
    }

    const findItem = async (id) => {
        try {
            const { data } = await api.get(`/${id}`);
            setEditItem(data);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar os items" + error);
        }
    }

    return (
        <TaskListContext.Provider 
            value={{ 
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider