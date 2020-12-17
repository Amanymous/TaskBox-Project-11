import React from "react";
import { TodoInterface } from "../interface/todo.interface";

interface props {
    todo: TodoInterface;
    onArchiveTodo?: (id: string) => void;
    onPinTodo?: (id: string) => void;
    onUnPinTodo?: (id: string) => void;
  }
  
  const Todo: React.FC<props> = ({
    todo: { id, title, state },
    onArchiveTodo,
    onPinTodo,
    onUnPinTodo,
  }) => {
    const [isChecked, setIsChecked] = React.useState<boolean>();
  
    console.log(isChecked);
    return (
      <div
        className={`list-item ${state} py-2 my-1 px-2 flex justify-between relative rounded ${
          state === "TODO_ARCHIVED" ? "bg-gray-100" : "bg-white"
        }`}
      >
        {state === "TODO_ARCHIVED" && (
          <div
            className="absolute w-full  -ml-2 mt-3  bg-gray-400"
            style={{ height: "3px" }}
          ></div>
        )}
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              defaultChecked={state === "TODO_PINNED"}
              disabled={state === "TODO_ARCHIVED" ? true : false}
              name="checked"
              className="cursor-pointer"
              onClick={(e) => {
                state !== "TODO_ARCHIVED" && !isChecked
                  ? !!onPinTodo && onPinTodo(id)
                  : !!onUnPinTodo && onUnPinTodo(id);
                setIsChecked(!isChecked);
              }}
            />
          </label>
          <div className="title inline">
            <h1 className="inline px-3">{title}</h1>
          </div>
        </div>
  
        {/* <div
          className="actions"
          onClick={(event) => event.stopPropagation()}
        ></div> */}
        {state !== "TODO_ARCHIVED" ? (
          <span
            className="text-blue-400 hover:text-blue-500 cursor-pointer relative mr-0 right-0 "
            onClick={() =>
              state !== "TODO_ARCHIVED" && !!onArchiveTodo && onArchiveTodo(id)
            }
          >
            archive
          </span>
        ) : (
          "archived"
        )}
        {/* {state !== "TODO_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => !!onPinTodo && onPinTodo(id)}>
            <span>pin</span>
          </a>
        )} */}
      </div>
    );
  };
  
  export default Todo;
  