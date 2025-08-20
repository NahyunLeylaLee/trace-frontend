import { ChangeEvent, useState } from "react";

export default function Input({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (!value) return;
    onSubmit(value);
    setValue("");
  };
  return (
    <div className="flex flex-row justify-between w-full bg-[#f2f2f3] rounded-lg p-2">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full rounded-lg mr-2 p-2" />
      <button onClick={handleSubmit} className="bg-white rounded-lg p-2">Add</button>
    </div>
  );
}