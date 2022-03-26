import { useState, KeyboardEvent } from "react";

import "./Input.css";

type InputType = {
  placeholder: string;
  type: string;
  onEnter(taskName: string): void;
};

export function Input({ type, placeholder, onEnter }: InputType) {
  const [inputValue, setInputText] = useState("");

  return (
    <input
      className="input_container"
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => setInputText(e.target.value)}
      onKeyUp={(e: KeyboardEvent) => {
        if (e.code === "Enter" && inputValue !== "") {
          onEnter(inputValue);
          setInputText("");
        }
      }}
    />
  );
}
