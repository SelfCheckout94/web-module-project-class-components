import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input onChange={this.props.handleChange} />
        <button>Add Todo</button>
        <button>Clear Complete</button>
      </form>
    );
  }
}

export default TodoForm;
