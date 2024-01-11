/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss"

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    
    const fetchTasks = async () => {
        const urlBase = 'http://localhost:8000/tasks'
        try {
            const { data } = await axios.get(`${urlBase}`)
            setTasks(data)
        } catch (error) {
            console.log(error)
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
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted === false)
                    .map(lastTask => (
                        <p>{lastTask.description}</p>
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>

                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted === true)
                    .map(lastTask => (
                        <p>{lastTask.description}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tasks