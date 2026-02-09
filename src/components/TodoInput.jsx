import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={handleAdd} disabled={!text.trim()}>
        Add
      </button>
    </div>
  );
}   