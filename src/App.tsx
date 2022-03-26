import React, { useEffect } from "react";

import { useState } from "react";

import { ItemType } from "./types/ItemType";

import { saveData, getData } from "./services/todoServices";

import "./App.css";
import { Input } from "./components/input/Input";
import { Item } from "./components/item/Item";

function App() {
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
    let historyList = [...history];
    history.map(
      //@ts-ignore
      (todos) =>
        historyList.push({
          id: todos["id"],
          name: todos["name"],
          complete: todos["complete"],
        }),
      setList(historyList)
    );
  }

  return (
    <div className="container">
      <h1>To Do</h1>
      <Input
        type="text"
        placeholder="Digite o nome da tarefa"
        onEnter={handleTask}
      />
      {list.map((item, index) => (
        <div key={index}>{<Item key={index} item={item} />}</div>
      ))}
    </div>
  );
}

export default App;
