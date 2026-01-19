import { Check } from "lucide-react";
import TaskDesc from "./TaskDesc";
import { useState } from "react";

function Tasks({ tasks, onTaskDeleteClick }) {
  const [isDesc, setIsDesc] = useState(false);
  const [task, setTask] = useState(null);

  return (
    <div className="tasks-wrapper">
      <ul className="tasks-container">
        {tasks.length === 0 ? (
          <p>No tasks available. Please add a task.</p>
        ) : null}
        {tasks.map((task) => {
          if (task.completed) return null;
          return (
            <li key={task.id}>
              <div className="task">
                <button
                  className="task-container"
                  onClick={() => {
                    setIsDesc(true);
                    setTask(task);
                  }}
                >
                  <span className="task-title">{task.title}</span>
                </button>
                <button
                  className="task-delete-button"
                  onClick={() => onTaskDeleteClick(task.id)}
                >
                  <Check />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {isDesc && <div className="overlay" />}
      {isDesc && (
        <TaskDesc task={task} isDesc={isDesc} setIsDesc={setIsDesc} />
      )}{" "}
    </div>
  );
}

export default Tasks;
