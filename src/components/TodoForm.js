import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={this.props.handleChange}
          value={this.props.todo}
          placeholder="Enter your todo!"
        />
        <button type="submit">Add Todo</button>
        <button type="reset" onClick={() => this.props.toggleClear()}>
          Clear Complete
        </button>
      </form>
    );
  }
}

export default TodoForm;
