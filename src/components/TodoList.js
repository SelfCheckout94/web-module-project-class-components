import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
