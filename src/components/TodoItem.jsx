import React, { useState, useEffect, useRef } from "react";



export default function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.text);
  const inputRef = useRef(null);
  

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  const handleSave = () => {
    updateTodo(todo.id, tempText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") setIsEditing(false); // Optional: Cancel edit
  };



  return (
    <li>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>

          <span onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >

            {todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>X</button>

        </>
      )}
    </li>
  );

}