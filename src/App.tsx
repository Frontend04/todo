import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './App.css'

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Fix laptop', completed: false },
    { id: '2', text: 'Goes to a meeting', completed: true },
    { id: '3', text: 'Do the cleaning', completed: false },
  ]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: String(tasks.length + 1),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default App;
