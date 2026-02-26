import { useState, useEffect, useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filterbutton from "./components/Filterbutton";

// 1. Define the Reducer logic outside the component

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case 'CLEAR_ALL':
      return [];
    default:
      return state;
  }
}

// 2. Lazy initializer for localStorage
const init = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

function App() {
  // 3. Initialize useReducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [filter, setFilter] = useState("All");

  // 4. Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Derived state for filtering
  const filteredTodos = todos.filter(todo => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
    return true;
  });

  // 5. Action Wrappers (Calling dispatch instead of setState)
  const addTodo = (text) => {
    if (text.trim() === "") return;
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const deleteTodo = (id) => dispatch({ type: 'DELETE_TODO', payload: id });
  const toggleTodo = (id) => dispatch({ type: 'TOGGLE_TODO', payload: id });
  const clearAllTodos = () => dispatch({ type: 'CLEAR_ALL' });
  const updateTodo = (id, newText) => dispatch({ type: 'UPDATE_TODO', id, text: newText });

  return (
    <div className="container min-h-screen min-w-lg items-center justify-start flex flex-col gap-4 w-full max-w-content bg-white rounded-2xl shadow-xl p-8 px-4">

      <h1 
      className="text-2xl font-semibold text-slate-800 text-center"
      >Todo App</h1>
      <p className="text-sm text-slate-500 mt-1 text-center">
        Stay organized. Stay productive.
      </p>
      <TodoInput addTodo={addTodo} />
      <Filterbutton filter={filter} setFilter={setFilter} />
      <TodoList
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        filteredTodos={filteredTodos}
        todos={todos}
        filter={filter}
      />
      <p
        className="flex justify-between items-center text-sm text-slate-500"
      >Total Todos: {todos.length}</p>
      <button
      className="text-red-500 hover:underline disabled:text-slate-300 flex"
      onClick={clearAllTodos} disabled={todos.length === 0}>
        Clear All
      </button>


      <h2 
      className="flex justify-center text-slate-500 items-end mt-50"
      >Built with React + Tailwind</h2>
    </div>
  );
}

export default App;
