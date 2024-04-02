import React from "react";
import { TodoTypes } from "../typeScript/types";

const Todo = (props: TodoTypes) => {
  const { id, title } = props.todo;

  const DeleteTodo = (id: string) => {
    props.handleDeleteTodo(id);
  };
  return (
    <article className="todo">
      <h3>Id:{id}</h3>
      <p>Title:{title}</p>
      <button
        onClick={() => {
          DeleteTodo(id);
        }}
      >
        Delete Todo
      </button>
    </article>
  );
};

export default Todo;
