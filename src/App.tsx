import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoType } from "./typeScript/types";

const todosData = [
  {
    id: "1",
    title: "Todo title 1",
  },
  {
    id: "2",
    title: "Todo title 2",
  },
  {
    id: "3",
    title: "Todo title 3",
  },
  {
    id: "4",
    title: "Todo title 4",
  },
  {
    id: "5",
    title: "Todo title 5",
  },
  {
    id: "6",
    title: "Todo title 6",
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = (id: string) => {
    const filterData = todos.filter((todo) => todo.id !== id);
    setTodos(filterData);
  };
  const handleAddNewTodo = (newTodo: TodoType) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  return (
    <div>
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
    </div>
  );
};

export default App;
