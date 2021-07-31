import "./components/Todo.css";

import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const todoList = [];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      todo: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      todo: e.target.value,
    });
  };

  addTodo = (addTodo) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { name: addTodo, id: uuidv4(), completed: false },
      ],
    });
  };

  toggleCompleted = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodo(this.state.todo);
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
          todoList={this.state.todoList}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
