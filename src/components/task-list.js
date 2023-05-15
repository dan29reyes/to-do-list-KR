import React from "react";
import Task from "./task";

const TaskList = ({ tasks }) => (
  <React.Fragment>
    {tasks.map((task) => (
      <Task key={task.id} title={task.title} description={task.description} />
    ))}
  </React.Fragment>
);

export default TaskList;
