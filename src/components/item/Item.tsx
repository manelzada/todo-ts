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
          }}
          onKeyUp={(e: KeyboardEvent) => {
            if (e.code === "Enter" && inputValue !== "") {
              updateTaskValue(item.id, inputValue, isChecked);
              item.name = inputValue;
              toggleEditing();
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

        {!isEditing ? (
          <>
            <span
              className="btn_card"
              onClick={() => {
                handleDeleteTask(item.id);
                setIsChecked(item.complete);
              }}
            >
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
          </>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
