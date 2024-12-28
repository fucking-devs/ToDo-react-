import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
