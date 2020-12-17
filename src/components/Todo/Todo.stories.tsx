import React from "react";
import Todo from "./Todo";
// import { TodoInterfaceProp } from "../interface/todo.interface";

export default {
  component: Todo,
  title: "Todo",
};
const Template = (args: any) => <Todo {...args} />;

export const Default: any = Template.bind({});

Default.args = {
  todo: {
    id: "1",
    title: "Test Todo",
    state: "TODOBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};
export const Pinned: any = Template.bind({});

Pinned.args = {
  todo: {
    ...Default.args.todo,
    state: "TODO_PINNED",
  },
};
export const Archived: any = Template.bind({});

Archived.args = {
  todo: {
    ...Default.args.todo,
    state: "TODO_ARCHIVED",
  },
};
