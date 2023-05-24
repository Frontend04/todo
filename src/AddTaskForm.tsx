import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddTaskFormProps {
  addTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [currentTask, setCurrentTask] = useState('');
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentTask.trim() !== '') {
      addTask(currentTask);
      setCurrentTask('');
      setIsFieldEmpty(false);
    } else {
      setIsFieldEmpty(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
    setIsFieldEmpty(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentTask}
        onChange={handleChange}
        className={isFieldEmpty ? 'empty' : ''}
      />
      {isFieldEmpty && <span className="error-message">Поле не должно быть пустым !</span>}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;
