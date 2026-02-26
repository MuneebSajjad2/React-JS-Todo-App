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
    if (e.key === "Escape") setIsEditing(false); 
  };



  return (
    <li
      className="flex justify-between gap-10 min-w-sm px-4 py-3   items-center  bg-slate-50 rounded-lg hover:bg-slate-100 transition "
    >
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            onKeyDown={handleKeyDown}
            className=" px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>

          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${todo.completed ? "text-slate-400 line-through" : "text-slate-700"}`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2 text-sm">
            <button
              className="text-slate-400 hover:text-blue-500 transition"
              onClick={() => setIsEditing(true)}>Edit</button>
            <button
              className="text-slate-400 hover:text-blue-500 transition"
              onClick={() => deleteTodo(todo.id)}>X</button>

          </div>

        </>
      )}
    </li>
  );

}