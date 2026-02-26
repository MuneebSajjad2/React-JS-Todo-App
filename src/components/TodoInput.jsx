import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
      className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
      className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
      onClick={handleAdd} disabled={!text.trim()}>

        Add
      </button>
    </div>
  );
}   