import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./Item.css";

import { ItemType } from "../../types/ItemType";
import { useState } from "react";
import { updateCheckedValue } from "../../services/todoServices";

type Props = {
  item: ItemType;
  handleDeleteTask(index: number): void;
};

export function Item({ item, handleDeleteTask }: Props) {
  const [isChecked, setIsChecked] = useState(item.complete);

  updateCheckedValue(item.id, item.name, isChecked);

  return (
    <div className="item_card">
      <p className={isChecked ? "p_decoration2" : "p_decoration1"}>
        {" "}
        {item.name}{" "}
      </p>
      <div className="line2">
        {!isChecked ? (
          <span className="btn_card" onClick={() => {}}>
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
              updateCheckedValue;
            }}
          />
        </span>
      </div>
    </div>
  );
}
