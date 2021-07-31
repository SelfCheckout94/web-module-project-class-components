import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoList.map((todo) => (
          <Todo />
        ))}
      </div>
    );
  }
}

export default TodoList;
