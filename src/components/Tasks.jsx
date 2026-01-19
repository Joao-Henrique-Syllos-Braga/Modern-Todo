import { Trash } from "lucide-react";

function Tasks({ tasks, onTaskDeleteClick }) {
  return (
    <ul className="tasks-container">
      {tasks.map((task) => (
        <li key={task.id}>
          <button className="task-container">
            <h2 className="task-title">{task.title}</h2>
          </button>
          <button className="task-delete-button" onClick={() => onTaskDeleteClick(task.id)}>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
