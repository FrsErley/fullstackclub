import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import { useAlert } from 'react-alert'

import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import './AddTask.scss'

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState('')

  const alert = useAlert()

  const onChange = (e) => {
    setTask(e.target.value)
  }

  const handleTaskAddition = async () => {
    try {
      await axios.post('http://localhost:8000/tasks', {
        description: task,
        isCompleted: false
      })

      await fetchTasks()

      setTask('')

      alert.success('A tarefa foi adicionada com sucesso!')
    } catch (_error) {
      return alert.error('Algo deu errado')
    }
  }

  return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
  )
}

export default AddTask
