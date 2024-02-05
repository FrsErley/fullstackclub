/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss"

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";



const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();
    
    const fetchTasks = async () => {
        const urlBase = 'http://localhost:8000/tasks'
        try {
            const { data } = await axios.get(`${urlBase}`)
            setTasks(data)
        } catch (_error) {
            alert.error('Não foi possível recuperar as tarefas criadas!')
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fetchTasks={fetchTasks}/>
                <div className="tasks-list">
                    {tasks
                    .filter(task => task.isCompleted === false)
                    .map(lastTask => (
                        <TaskItem task={lastTask} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>

                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted)
                    .map((completedTask) => (
                        <TaskItem task={completedTask} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks