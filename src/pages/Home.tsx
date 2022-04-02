import { useEffect } from "react";

import { useState } from "react";

import { ItemType } from "../types/ItemType";

import { saveData, getData, removeData } from "../services/todoServices";

import "./Home.css";
import { Input } from "../components/input/Input";
import { Item } from "../components/item/Item";

export default function Home() {
  const [list, setList] = useState<ItemType[]>([]);
  const handleTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      complete: false,
    });
    setList(newList);

    try {
      saveData(newList);
    } catch (err) {
      console.log(err);
    }
  };

  const history = getData();

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
  }

  function handleDeleteTask(id: number) {
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
      <Input
        type="text"
        placeholder="Digite o nome da tarefa"
        onEnter={handleTask}
      />
      {list.map((item, index) => (
        <div key={index}>
          {<Item key={index} item={item} handleDeleteTask={handleDeleteTask} />}
        </div>
      ))}
    </div>
  );
}
