export type TodoType = {
  id: string;
  title: string;
};
export type TodosType = {
  todos: TodoType[];
  handleDeleteTodo: Function;
};
export type TodoTypes = {
  todo: TodoType;
  handleDeleteTodo: Function;
};
export type Props = {
  handleAddNewTodo: Function;
};
