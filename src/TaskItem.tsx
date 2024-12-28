import React from "react";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderBottom: '0.5px solid #eee' }}>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          style={{ marginRight: '0.5rem' }}
        />
        <span className={task.completed ? 'completed' : ''} style={{ wordWrap: 'break-word', overflowWrap: 'break-word', maxWidth: '70%' }}>
          {task.text}
        </span>
      </div>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)} style={{ marginRight: '0.5rem' }}>
          {task.completed ? "Восстановить" : "Завершить"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Удалить</button>
      </div>
    </li>
  );
};

export default TaskItem;
