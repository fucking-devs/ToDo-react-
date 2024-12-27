import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskText, setTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTaskText("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setTaskText(task.text);
  };

  const saveEdit = () => {
    if (editingTaskId === null || taskText.trim() === "") return;
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: taskText } : task
      )
    );
    setEditingTaskId(null);
    setTaskText("");
  };

  return (
    <div className="todo-app">
      <h1>Список задач</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Введите новую задачу"
      />
      {editingTaskId !== null ? (
        <button onClick={saveEdit}>Сохранить изменения</button>
      ) : (
        <button onClick={addTask}>Добавить задачу</button>
      )}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => startEditing(task)}>Изменить</button>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
