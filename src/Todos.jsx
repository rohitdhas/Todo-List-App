import React from "react";

const Todos = ({ todos, rmvTodo }) => {

  // Rendering todos on page by iterating through state
  // if length of todos list is 0 then showing a msg otherwise rendering todos
  return todos.length !== 0 ? (
    <div id="todo-list">
      {todos.map((todo) => (
        <div onClick={() => rmvTodo(todo.id)} className="todo" key={todo.id}>
          <p>{todo.content}</p>
        </div>
      ))}
    </div>
  ) : (
    <h2 id="empty-msg">
      You don't have any Task Left!{" "}
      <span role="img" aria-label="icon">
        🎉
      </span>
    </h2>
  );
};

export default Todos;
