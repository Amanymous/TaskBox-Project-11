import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/redux";
import InboxScreen from "./InboxScreen";
import { Meta } from "@storybook/react/types-6-0";
import * as TodoListStories from "./TodoList.stories";

export default {
  component: InboxScreen,
  title: "Inbox Screen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;
const Template = (args: any) => <InboxScreen />;
export const Default: any = Template.bind({});
