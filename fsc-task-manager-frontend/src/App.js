/* eslint-disable no-unused-vars */
// import React from 'react'
// import TaskItem from './components/TaskItem'


import { useState, useEffect } from 'react';
import axios from 'axios'

import TaskItem from './components/TaskItem';

const App = () => {

  
  const [tasks, setTasks] = useState([
    {
      id: '1',
      description: 'Estudar Programação',
      isCompleted: false,
    },
    {
      id: '2',
      description: 'Ler',
      isCompleted: true,
    }
  ]);

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
    <>
      {tasks.map(task => (
      <TaskItem key={task.id} task={task}/>
      ))}
    
    </>
  );
}

export default App;