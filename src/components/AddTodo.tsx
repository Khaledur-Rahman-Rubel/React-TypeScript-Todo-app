import React, { ChangeEvent, FormEvent, useState } from "react";
import { Props } from "../typeScript/types";

const AddTodo = (props: Props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { id: new Date().getTime().toString(), title };
    props.handleAddNewTodo(newTodo);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="title">Title:</label>
        <input type="text" value={title} onChange={handleChange} required />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
