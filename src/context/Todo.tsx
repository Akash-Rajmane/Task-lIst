import { useState, createContext } from "react";

interface props {
  children: React.ReactNode;
}

type subTask = {
  subtask: string;
};
interface todo {
  id: number;
  title: string;
  description?: string;
  subtasks?: Array<subTask>;
}

export interface todoContext {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
}

export const TodoContext = createContext<todoContext | null>(null);

export const TodoProvider: React.FC<props> = ({ children }) => {
  const [todos, setTodos] = useState<Array<todo>>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
