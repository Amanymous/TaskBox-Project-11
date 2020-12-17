import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTodo, unPinTodo, archive } from "../redux/redux";
import { TodoInterface } from "../interface/todo.interface";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const InboxScreen = () => {
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todo);
  const onPinTodo = (id: string) => {
    dispatch(pinTodo({ id }));
  };
  const onArchiveTodo = (id: string) => {
    dispatch(archive({ id: id }));
  };
  const onUnPinTodo = (id: string) => {
    dispatch(unPinTodo({ id: id }));
  };
  return (
    <div>
      <AddTodo />
      <TodoList
        todos={todo as TodoInterface[]}
        onPinTodo={onPinTodo}
        onArchiveTodo={onArchiveTodo}
        onUnPinTodo={onUnPinTodo}
      />
    </div>
  );
};
export default InboxScreen;
