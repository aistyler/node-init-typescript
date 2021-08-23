/* eslint-disable @typescript-eslint/ban-ts-comment */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Login from "./login";

export default {
  title: "Page-views/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Login> = (args: any) => <Login {...args} />;

export const LoginDefault = Template.bind({});
LoginDefault.args = {
  location: window.location,
  redirectPath: "/",
  isAuthenticated: () => true,
  //@ts-ignore
  t: (key: string) => key,
  tReady: true,
};
