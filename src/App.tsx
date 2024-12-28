import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [nextId, setNextId] = useState(1);

  const addTask = (taskText: string) => {
    setTasks([...tasks, { id: nextId, text: taskText, completed: false }]);
    setNextId(nextId + 1);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px' }}>
      <h1>Список задач</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
