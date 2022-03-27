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
  localStorage.setItem("tasks", JSON.stringify(removedTask));
};
