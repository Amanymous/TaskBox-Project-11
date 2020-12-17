import React from "react";
import { TodoInterface } from "../interface/todo.interface";
import Todo from "./Todo";

export interface Todosprops {
  loading?: boolean;
  todos: TodoInterface[];
  onPinTodo?: (id: string) => void;
  onArchiveTodo?: (id: string) => void;
  onUnPinTodo?: (id: string) => void;
}
const TodoList: React.FC<Todosprops> = ({
  loading,
  todos,
  onPinTodo,
  onArchiveTodo,
  onUnPinTodo,
}): JSX.Element => {
  const events = {
    onPinTodo,
    onArchiveTodo,
    onUnPinTodo,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return <div className="list-items">{LoadingRow}</div>;
  }
  if (todos?.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no todos</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const todosInOrder = [
    ...todos.filter((t) => t.state === "TODO_PINNED"),
    ...todos.filter((t) => t.state !== "TODO_PINNED"),
  ];
  console.log(todosInOrder);

  return (
    <div className="max-w-xl mx-auto bg-gray-200 p-4 my-6 rounded-md ">
      {!!todosInOrder &&
        todosInOrder.map((todo) => (
          <Todo key={todo.id} todo={todo} {...events} />
        ))}
    </div>
  );
};

export default TodoList;
