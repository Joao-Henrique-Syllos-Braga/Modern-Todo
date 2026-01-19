import { useState } from "react";
import "./App.css";

import AddTask from "./components/AddTask";
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

  function onTaskAddClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  return (
    <div className="todo">
      <h1 className="title">TODO LIST</h1>
      <div className="container">
        <AddTask tasks={tasks} onTaskAddClick={onTaskAddClick} />
        <Tasks tasks={tasks} onTaskDeleteClick={onTaskDeleteClick} />
      </div>
    </div>
  );
}

export default App;
