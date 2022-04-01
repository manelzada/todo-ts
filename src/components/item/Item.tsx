import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./Item.css";

import { ItemType } from "../../types/ItemType";
import { useState, KeyboardEvent } from "react";
import { updateTaskValue } from "../../services/todoServices";

type Props = {
  item: ItemType;
  handleDeleteTask(index: number): void;
};

export function Item({ item, handleDeleteTask }: Props) {
  const [isChecked, setIsChecked] = useState(item.complete);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputText] = useState(item.name);
  const [attKey, setAttKey] = useState(0);
  const toggleEditing = () => setIsEditing((value) => !value);
  updateTaskValue(item.id, item.name, isChecked);

  return (
    <div className="item_card">
      {isEditing ? (
        <input
          className="input_field"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputText(e.target.value);
            console.log(inputValue);
          }}
          onKeyUp={(e: KeyboardEvent) => {
            if (e.code === "Enter" && inputValue !== "") {
              updateTaskValue(item.id, inputValue, isChecked);
              item.name = inputValue;
              setInputText("");
              toggleEditing();
              setAttKey((key) => key + 1);
            }
          }}
        />
      ) : (
        <p className={isChecked ? "p_decoration2" : "p_decoration1"}>
          {item.name}
        </p>
      )}

      <div className="line2">
        {!isChecked ? (
          <span
            className="btn_card"
            onClick={() => {
              toggleEditing();
            }}
          >
            <AiTwotoneEdit />
          </span>
        ) : (
          <span></span>
        )}

        <span className="btn_card" onClick={() => handleDeleteTask(item.id)}>
          <AiFillDelete />
        </span>
        <span>
          <input
            className="select_btn"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              updateTaskValue;
            }}
          />
        </span>
      </div>
    </div>
  );
}
