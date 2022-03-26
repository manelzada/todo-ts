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
