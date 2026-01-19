import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação oficial do React e fazer tutoriais.",
      completed: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "Comprar mantimentos para a semana.",
      completed: false,
    },
  ]);

  function onTaskDeleteClick(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1 className="title">TODO LIST</h1>
      <Tasks tasks={tasks} onTaskDeleteClick={onTaskDeleteClick} />
    </div>
  );
}

export default App;
