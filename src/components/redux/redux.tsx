import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultTodos = [
  { id: "1", title: "abc", state: "TODOBOX" },
  { id: "2", title: "abc1", state: "TODOBOX" },
  { id: "3", title: "abc2", state: "TODOBOX" },
  { id: "4", title: "abc3", state: "TODOBOX" },
];
const todoReducer = createSlice({
  name: "todos",
  initialState: defaultTodos,
  reducers: {
    pinTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TODO_PINNED",
          };
        } else {
          return item;
        }
      });
    },
    unPinTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TODOBOX",
          };
        } else {
          return item;
        }
      });
    },
    archive: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            state: "TODO_ARCHIVED",
          };
        } else {
          return item;
        }
      });
    },
    addTodo: (state, action) => {
      let id = "0";
      if (state.length !== undefined && state.length !== null) {
        id = (state.length + 1).toString();
      }
      return [
        ...state,
        { id: id, title: action.payload.title, state: "TODOBOX" },
      ];
    },
  },
});

const store = configureStore({
  reducer: todoReducer.reducer,
});

export const { pinTodo, unPinTodo, archive, addTodo } = todoReducer.actions;

export { todoReducer, store };
