import React from 'react';  
import './App.css'
interface TaskProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
  };
  deleteTask: (taskId: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, deleteTask, toggleTaskCompletion }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCheckboxChange = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <div className='task'>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span>{task.text}</span>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default Task;
