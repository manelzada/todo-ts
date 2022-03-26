import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./Item.css";

import { ItemType } from "../../types/ItemType";
import { useState } from "react";

type Props = {
  item: ItemType;
};

export function Item({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.complete);

  return (
    <div className="item_card">
      <p className={isChecked ? "p_decoration2" : "p_decoration1"}>
        {" "}
        {item.name}{" "}
      </p>
      <div className="line2">
        <span className="btn_card" onClick={() => {}}>
          <AiTwotoneEdit />
        </span>
        <span className="btn_card" onClick={() => {}}>
          <AiFillDelete />
        </span>
        <span>
          <input
            className="select_btn"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </span>
      </div>
    </div>
  );
}
