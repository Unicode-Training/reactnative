import { create } from "zustand";

export const useTodo = create((set) => {
  return {
    todoList: [],
    status: "idle",
    error: "",
    getTodoList: async () => {
      try {
        set(() => ({
          status: "pending",
        }));
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        set(() => ({
          status: "idle",
          todoList: data,
        }));
      } catch {
        set(() => ({
          status: "error",
          error: "Đã có lỗi xảy ra",
        }));
      }
    },
  };
});
