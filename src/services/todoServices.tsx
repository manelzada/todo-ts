import { Item } from "../components/item/Item";
import { ItemType } from "../types/ItemType";

export const saveData = (data: ItemType[]) => {
  localStorage.setItem("tasks", JSON.stringify(data));
};

export const getData = () => {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return [];
  }
  return JSON.parse(storedTasks);
};

export const removeData = (id: number) => {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return [];
  }
  //@ts-ignore
  const removedTask = JSON.parse(storedTasks).filter((item) => item.id !== id);
  console.log(removedTask);
  localStorage.setItem("tasks", JSON.stringify(removedTask));
};

export const filteredTasks = (complete: boolean) => {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return [];
  }
  //@ts-ignore
  return JSON.parse(storedTasks).filter((item) => item.complete == complete);
};

export const updateTaskValue = (
  id: number,
  name: string,
  complete: boolean
) => {
  const storedTasks = localStorage.getItem("tasks");
  //@ts-ignore
  const updatedTask = JSON.parse(storedTasks).filter((item) => item.id !== id);
  updatedTask.push({
    id: id,
    name: name,
    complete: complete,
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTask));
};
