import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Stay late up",
    "Learn React JS",
    "Smoking & Coffee",
  ]);

  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTasks() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }

  function deleteTasks(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];

      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];

      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  };

  return (
    <div className="h-screen bg-slate-600 text-white text-center pt-14">
      <h1 className="font-bold text-4xl">To Do List</h1>
      <div className="pt-10">
        <input
          className="p-1 px-5 rounded-md text-slate-700"
          type="text"
          placeholder="Enter Your Tasks..."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button
          onClick={addTasks}
          className="p-1 px-4 ml-3 bg-green-500 hover:bg-green-600 rounded-md"
        >
          Add
        </button>
      </div>

      <ol className="pt-10">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-outside px-3 p-3 mx-72 bg-slate-400 mb-5 rounded-sm"
          >
            <span className="text-xl font-bold">{task}</span>
            <button
              onClick={() => deleteTasks(index)}
              className="p-1 px-4 ml-60 bg-rose-500 hover:bg-rose-600 rounded-md"
            >
              Delete
            </button>
            <button
              onClick={() => moveTaskUp(index)}
              className="p-1 px-4 ml-3 bg-cyan-500 hover:bg-cyan-600 rounded-md"
            >
              ⬆️
            </button>
            <button
              onClick={() => moveTaskDown(index)}
              className="p-1 px-4 ml-3 bg-cyan-500 hover:bg-cyan-600 rounded-md"
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
