import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  filteredTodos,
  deleteTodo,
  toggleTodo,
  updateTodo,
  todos,
  filter
}) {




  function getEmptyMessage() {
    if (filter === "Completed") return "No completed todos";
    if (filter === "Active") return "No active todos";
    return "No todos yet";
  }




  return (
    <div>

      {/* Empty State */}
      {todos.length === 0 ? (
        <p style={{ opacity: 0.6, marginTop: "1rem" }}>
          No todos at all
        </p>
      )

        : filteredTodos.length === 0 ?

          <p style={{ opacity: 0.6, marginTop: "1rem" }}>
            {getEmptyMessage()}
          </p>


          : (
            <ul>
              {filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                  updateTodo={updateTodo}
                />
              ))}
            </ul>
          )}
    </div>
  );

}