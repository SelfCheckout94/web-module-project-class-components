import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div onClick={() => this.props.toggleCompleted(this.props.id)}>
        <p className={`todo ${this.props.todo.completed ? "completed" : ""}`}>
          {this.props.todo.name}
        </p>
      </div>
    );
  }
}

export default Todo;
