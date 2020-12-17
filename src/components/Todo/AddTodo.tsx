import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmitted = () => {
    if (title !== "") {
      dispatch(addTodo({ title }));
      setTitle("");
    } else {
      setError("Title is required");
    }
  };
  return (
    <div>
      <div className="max-w-xl mx-auto bg-yellow-600 p-4 my-6 rounded-md ">
        <h1 className="text-center text-3xl capitalize font-semibold text-white ">
          Add Todo
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <div>
            <p className="text-white">Title</p>
            <input
              className="max-w-lg w-64 p-1 rounded focus:outline-none block"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-red-700 -my-1 text-sm">{error}</p>}
            <button
              className="py-1 px-4 focus:outline-none bg-green-600 text-white rounded my-3"
              onClick={handleSubmitted}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
