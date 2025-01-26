import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
