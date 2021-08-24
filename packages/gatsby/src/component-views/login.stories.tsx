/* eslint-disable @typescript-eslint/ban-ts-comment */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Login from "./Login";

export default {
  title: "Component-views/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Login> = (args: any) => <Login {...args} />;

export const LoginDefault = Template.bind({});
LoginDefault.args = {
  identifier: "id",
  onChangeIdentifier: () => {},
  password: "password",
  onChangePassword: () => {},
  onSubmit: () => {},
  loading: false,
  error: "",
  //@ts-ignore
  t: (key: string) => key,
};

export const LoginLoading = Template.bind({});
LoginLoading.args = {
  identifier: "id",
  onChangeIdentifier: () => {},
  password: "password",
  onChangePassword: () => {},
  onSubmit: () => {},
  loading: true,
  error: "",
  //@ts-ignore
  t: (key: string) => key,
};

export const LoginError = Template.bind({});
LoginError.args = {
  identifier: "id",
  onChangeIdentifier: () => {},
  password: "password",
  onChangePassword: () => {},
  onSubmit: () => {},
  loading: false,
  error: "error message",
  //@ts-ignore
  t: (key: string) => key,
};
