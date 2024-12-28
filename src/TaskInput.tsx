import React, { useState } from "react";

interface TaskInputProps {
  addTask: (taskText: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) { // Проверяем, что текст не пустой
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Введите новую задачу"
        style={{
          flexGrow: 1,
          padding: '0.6em',
          borderRadius: '0.5em',
          border: '1px solid #ccc',
          marginRight: '0.5rem',
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          padding: '0.6em 1em',
          borderRadius: '0.5em',
          border: 'none',
          backgroundColor: '#646cff',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5a54e3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#646cff')}
      >
        Добавить задачу
      </button>
    </div>
  );
};

export default TaskInput;
