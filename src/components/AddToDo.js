import React, { useState } from "react";
import TaskList from "./task-list";

function AddToDo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: title,
        description: description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <TaskList tasks={tasks}></TaskList>
      <form onSubmit={addItem}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="title"
            name="title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddToDo;
