import React from "react";

export default function Input({ type, title, form, setForm }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm capitalize">{title}</label>
      <input
        className="text-center border-b border-black outline-none"
        type={type}
        name={title}
        onChange={handleChange}
      />
    </div>
  );
}
