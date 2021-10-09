import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { v4 as uuidv4 } from 'uuid';
import "./App.css";

import AddTask from "./components/Task/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Task/Tasks";
import TaskDetails from "./components/Task/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "React JS",
      completed: true,
    },
    {
      id: "2",
      title: "Javascript",
      completed: true,
    },
    {
      id: "3",
      title: "Bootstrap",
      completed: false,
    },
    {
      id: "4",
      title: "HTML",
      completed: false,
    },
    {
      id: "5",
      title: "CSS",
      completed: true,
    },
  ]);


  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={()=>(
          <div>
            <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
          </div>
        )}/>  
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
