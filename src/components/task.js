import React from "react";
import circlesImg from "../images/circles.png";
import "../styles/task.css";

class Task extends React.Component {
  render() {
    const { id, title, description } = this.props;
    return (
      <div
        className="task mx-auto Fitness-task"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${"#56CCF2"}  , ${"#2F80ED"}) `,
        }}
      >
        <div className="task-body">
          <div className="row center">
            <div className="col-6 Fitness-task-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
