import React from "react";
function Todos({todos, rmvTodo}){
   if (todos !== null && todos.length !== 0){
     return (
     <div id="todo-list">
       {(todos.map(todo => (
          <div
          onClick={() => rmvTodo(todo.id)}
          className="todo"
          key={todo.id}
        >
          <p>{todo.content}</p>
        </div>
       )))}
     </div>
     )
   }
   return (
    <h2 id="empty-msg">
    You don't have any Task Left!
    <span role="img" aria-label="icon">
      🎉
    </span>
  </h2>
   )
}
export default Todos;