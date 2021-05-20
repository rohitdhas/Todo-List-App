import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Method to update state according to value of input field
  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  // Method to submit form and add todo to list
  handleSubmit(event) {
    event.preventDefault(); 
    this.props.add(this.state); // passing current state as an argument to so that we can access it in App Component
    this.setState({ content: "" });
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <input
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
            id="userInput"
          />
          <button onClick={this.handleSubmit}>Add Todo</button>
        </form>
      </div>
    );
  }
}
