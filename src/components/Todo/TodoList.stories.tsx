import React from "react";
import TodoList, { Todosprops } from "./TodoList";
import * as TodoStories from "./Todo.stories";

export default {
  component: TodoList,
  title: "TodoList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};
const Template = (args: Todosprops) => <TodoList {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  todos: [
    { ...TodoStories.Default.args.todo, id: "1", title: "Todo 1" },
    { ...TodoStories.Default.args.todo, id: "2", title: "Todo 2" },
    { ...TodoStories.Default.args.todo, id: "3", title: "Todo 3" },
    { ...TodoStories.Default.args.todo, id: "4", title: "Todo 4" },
    { ...TodoStories.Default.args.todo, id: "5", title: "Todo 5" },
    { ...TodoStories.Default.args.todo, id: "6", title: "Todo 6" },
  ],
};
// Shaping the stories through args composition.
// The data was inherited from the Default story in todo.stories.js.

export const WithPinnedTodos: any = Template.bind({});
WithPinnedTodos.args = {
  todos: [
    ...Default.args.todos.slice(0, 5),
    { id: "6", title: "Todo 6 (pinned)", state: "TODO_PINNED" },
  ],
};
// Shaping the stories through args composition.
// Inherited data coming from the Default story.

export const Loading: any = Template.bind({});
Loading.args = {
  todos: [],
  loading: true,
};

export const Empty: any = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
// Shaping the stories through args composition.
// Inherited data coming from the Loading story.
