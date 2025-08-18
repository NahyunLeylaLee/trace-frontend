import { useState } from "react";

export default function Input({ onSubmit }) {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    setInput("");
  };
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}