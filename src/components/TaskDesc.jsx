import { ChevronLeftIcon } from "lucide-react";

function TaskDesc({ task, isDesc, setIsDesc }) {
  if (!task) return null;
  return (
    <div className={isDesc ? "task-desc-on" : "task-desc-off"}>
      <div className="div"></div>
      <div className="task-text-container">
        <div className="text">
            <div className="div">
              <h1>{task.title}</h1>
              <button onClick={() => setIsDesc(false)}>
                <ChevronLeftIcon />
              </button>
            </div>
            <p>{task.description}</p>
                  </div>
        </div>
      <div className="task-status-container">
        <span>{task.completed ? "COMPLETED" : "INCOMPLETE"}</span>
      </div>
    </div>
  );
}

export default TaskDesc;
