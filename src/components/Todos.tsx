import React from "react";
import Todo from "./Todo";
import { TodosType } from "../typeScript/types";

const Todos = (props: TodosType) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
