import { useState,useEffect,useReducer } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filterbutton from "./components/Filterbutton";



function App() {



  // function todoReducer(state, action) {
  //   switch (action.type) {
  //     case 'ADD_TODO':
  //       return [...state, { id: Date.now(), text: action.payload, completed: false }];
  //       return state;
  //     default:
  //       return state;
  //   }
  // }



  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];


  });

  const [filter, setFilter] = useState("All");


  let filteredTodos = todos.filter(todo => {

    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
    return true;
  })






  const updateTodo = (id, newText) => {
    // .map returns a new array, ensuring React detects the change
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  function addTodo(text) {
    if (text.trim() === "") return;
    setTodos([...todos, { text, id: Date.now(), completed: false }]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function clearAllTodos() {
    setTodos([]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);





  return (
    <div>
      <h1>Todo App</h1>


      <TodoInput addTodo={addTodo} />


      <Filterbutton
        filter={filter}
        setFilter={setFilter}

      />


      <TodoList

        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        filteredTodos={filteredTodos}
        todos={todos}
        filter={filter}



      />
      <p>Total Todos: {todos.length}</p>

      <button onClick={clearAllTodos} disabled={todos.length === 0}>
        Clear All
      </button>
    </div>
  );
}

export default App;

















































// import { useState } from "react";


// function App() {

//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);


//   function addTodo() {


//     if (todo.trim() === "")  return

//     setTodos([...todos, { text: todo, id: Date.now(), completed: false }])


//     setTodo("")


//   }



//   function deleteTodo(id) {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos)

//   }

//   function clearAllTodos() {
//     setTodos([])
//   }

//   function toggleTodo(id) {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo

//       )
//     )
//   }


//   return (
//     <div>
//       <input
//         onKeyDown={(e) => e.key === "Enter" && addTodo()}
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />

//       <button 
//       onClick={addTodo}
//       disabled={!todo.trim()} 

//       >Add</button>

//       <ul>

//         {todos.map((todo) => {
//           return <li key={todo.id}>

//               <span
//                 onClick={() => toggleTodo(todo.id)}
//                 style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
//               >
//                 {todo.text}
//               </span>

//             <button onClick={() => deleteTodo(todo.id)}

//             >X</button>


//           </li>


//         })}



//       </ul>

//       <button
//         onClick={clearAllTodos}
//          disabled={todos.length === 0}
//       >Clear All</button>

//     </div>
//   )
// }
// export default App;











