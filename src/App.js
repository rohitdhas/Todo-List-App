import "./styles.css";
import React from "react";
import Todos from "./Todos";
import Form from "./Form";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.nightModeToggle = this.nightModeToggle.bind(this);
  }


  // Method to remove todo from state and LocalStorage
  removeTodo(id) {
    let newList = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todoList: newList });

    localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
  }

  // Method to add todo in state
  addTodo(todo) {
    if (todo.content === "") return;
    todo.id = Math.random(); //Generating a random id for a todo
    let newList = [...this.state.todoList, todo]; // Creating new todoList by adding new todo in addition to previous ones.
    this.setState({ todoList: newList });
  }

  nightModeToggle() {
    const { theme } = localStorage; //Getting theme from localStorage
    document.body.classList.toggle('dark'); // Switching from dark mode to default or from default mode to dark.

    // Updating current theme in localStorage
    if (theme === 'default'){
      localStorage.setItem('theme', 'dark');
      return
    }
    localStorage.setItem('theme', 'default');
  }

  // Doing some stuff when user refresh the page or comes back to page
  componentDidMount() {
    const savedTodos = JSON.parse(localStorage.getItem("TodoList")); //Getting saved todos from LocalStorage
    const theme = localStorage.getItem('theme'); // Getting theme from localStorage
    
    this.setState({ todoList: savedTodos}); // Assigning saved todos to State so that it render's all the passed todos again after reload

    // Applying last used theme on reload
    if (theme === 'dark'){
      document.body.classList.add('dark');
      return;
    }
    document.body.classList.add('default');
  }

  // Adding todos to LocalStorage after they appear on page
  componentDidUpdate() {
    localStorage.setItem("TodoList", JSON.stringify(this.state.todoList));
  }

  render() {
    return (
      <div id="container">
        {/* Dark Mode Icon */}
        <FontAwesomeIcon
          icon={faMoon}
          id="icon"
          onClick={this.nightModeToggle}
        />

        <h1 id="title">Todo List</h1>

        <Form add={this.addTodo} /> {/*Form Component*/}
        <Todos todos={this.state.todoList} rmvTodo={this.removeTodo} />{/*Todos Component*/}
        
        {/* Footer */}
        <footer>
          <p>Designed and Coded by</p>
          <p><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rohit-dhas-26b68215a/">Rohit Dhas</a></p>
        </footer>
      </div>
    );
  }
}
