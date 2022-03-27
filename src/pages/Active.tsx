import { useEffect } from "react";

import { useState } from "react";
import { Item } from "../components/item/Item";

import { filteredTasks, removeData } from "../services/todoServices";
import { ItemType } from "../types/ItemType";

import "./Home.css";

export function Active() {
  const [list, setList] = useState<ItemType[]>([]);
  const history = filteredTasks(false);

  useEffect(() => {
    loadHistory();
  }, []);

  function loadHistory() {
    //@ts-ignore
    let historyList = [];
    history.map(
      //@ts-ignore
      (todos) =>
        historyList.push({
          id: todos["id"],
          name: todos["name"],
          complete: todos["complete"],
        })
    );
    //@ts-ignore
    setList(historyList);
    //@ts-ignore
    console.log(historyList);
  }

  function handleDeleteTask(id: number) {
    console.log(`id: ${id}`);
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
    try {
      removeData(id);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      {list.map((task, index) => (
        <div key={index}>
          {
            <Item
              key={index}
              item={task}
              handleDeleteTask={handleDeleteTask}
              unalterable={true}
            />
          }
        </div>
      ))}
    </div>
  );
}
